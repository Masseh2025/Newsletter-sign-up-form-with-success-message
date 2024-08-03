const params = new URL(document.location).searchParams;
const email = params.get("email");
const cardParagraph = document.querySelector(".card__paragraph--success");

cardParagraph.textContent = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
