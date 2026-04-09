document.getElementById("btn").addEventListener("click", () => {
  let mem = document.getElementById("members");
  let amt = document.getElementById("amount");
  let tip = document.getElementById("tip");
  let output = document.getElementById("result");
  let members = Number(mem.value);
  if (members <= 0 || !members || isNaN(members)) {
    return;
  }
  let amount = Number(amt.value);
  if (amount <= 0 || !amount || isNaN(amount)) {
    return;
  }
  let tips = Number(tip.value);
  if (!tips) {
    tips = 0;
  }
  if (isNaN(tips)) {
    return;
  }
  let totalAmt = amount + tips;
  let per = totalAmt / members;

  output.textContent = `Each person pays: ₹${per.toFixed(2)}`;
});
