const crypto = require("crypto");

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {

    const {
      amount,
      customerName,
      customerEmail,
      customerMobile
    } = req.body;

    const merchantId = process.env.MC801533;
    const password = process.env.ysu99801u2;
    const integritySalt = process.env.690ctx5exv;

    const dateTime = new Date()
      .toISOString()
      .replace(/[-:.TZ]/g, "")
      .slice(0, 14);

    const expiryDate = String(Number(dateTime) + 10000);

    const txnRefNo = "T" + Date.now();

    const pp_Amount = String(amount * 100);

    const data = {
      pp_Version: "1.1",
      pp_TxnType: "MWALLET",
      pp_Language: "EN",
      pp_MerchantID: merchantId,
      pp_SubMerchantID: "",
      pp_Password: password,
      pp_BankID: "",
      pp_ProductID: "",
      pp_TxnRefNo: txnRefNo,
      pp_Amount: pp_Amount,
      pp_TxnCurrency: "PKR",
      pp_TxnDateTime: dateTime,
      pp_BillReference: "KMM001",
      pp_Description: "Korangi Mini Mart Order",
      pp_TxnExpiryDateTime: expiryDate,
      pp_ReturnURL: "https://korangi-mini-mart.vercel.app/",
      pp_MobileNumber: customerMobile,
      pp_CNIC: "345678",
      ppmpf_1: customerName
    };

    const sortedString =
      integritySalt +
      "&" +
      Object.values(data).join("&");

    const secureHash = crypto
      .createHmac("sha256", integritySalt)
      .update(sortedString)
      .digest("hex");

    data.pp_SecureHash = secureHash;

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}
