import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  state: string;
  consent: boolean;
}

// Submit lead to Lead Prosper
async function submitToLeadProsper(data: LeadData) {
  const apiKey = process.env.LEAD_PROSPER_API_KEY;

  if (!apiKey) {
    console.error("LEAD_PROSPER_API_KEY is not configured");
    return { success: false, error: "API key not configured" };
  }

  try {
    const response = await fetch("https://api.leadprosper.io/ingest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        email: data.email,
        state: data.state,
        tcpa_consent: data.consent,
        source: "Find The Plan Website",
        landing_page: "homepage",
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return { success: true, data: result };
    } else {
      const errorText = await response.text();
      console.error("Lead Prosper error:", errorText);
      return { success: false, error: errorText };
    }
  } catch (error) {
    console.error("Lead Prosper submission error:", error);
    return { success: false, error: String(error) };
  }
}

// Submit lead to Ringba
async function submitToRingba(data: LeadData) {
  const apiToken = process.env.RINGBA_API_TOKEN;

  if (!apiToken) {
    console.error("RINGBA_API_TOKEN is not configured");
    return { success: false, error: "API token not configured" };
  }

  try {
    const response = await fetch("https://api.ringba.com/v2/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${apiToken}`,
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phone,
        email: data.email,
        state: data.state,
        tcpaConsent: data.consent,
        source: "Find The Plan Website",
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return { success: true, data: result };
    } else {
      const errorText = await response.text();
      console.error("Ringba error:", errorText);
      return { success: false, error: errorText };
    }
  } catch (error) {
    console.error("Ringba submission error:", error);
    return { success: false, error: String(error) };
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.phone || !data.email || !data.state) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!data.consent) {
      return NextResponse.json(
        { error: "Consent is required" },
        { status: 400 }
      );
    }

    // Submit to both Lead Prosper and Ringba in parallel
    const [leadProsperResult, ringbaResult] = await Promise.all([
      submitToLeadProsper(data),
      submitToRingba(data),
    ]);

    // Log results for debugging
    console.log("Lead Prosper result:", leadProsperResult);
    console.log("Ringba result:", ringbaResult);

    // Return success if at least one submission succeeded
    if (leadProsperResult.success || ringbaResult.success) {
      return NextResponse.json({
        success: true,
        message: "Lead submitted successfully",
        leadProsper: leadProsperResult.success,
        ringba: ringbaResult.success,
      });
    }

    // Both failed
    return NextResponse.json(
      {
        error: "Failed to submit lead",
        details: {
          leadProsper: leadProsperResult.error,
          ringba: ringbaResult.error,
        },
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
