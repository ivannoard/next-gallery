export function convertDate(date) {
  return new Date(date?.timestamp.seconds * 1000)
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .replace(/ /g, " ")
    .toUpperCase();
}

// new Date(refferalData.referral_code_expired_at)
//   .toLocaleDateString("id-ID", {
//     day: "2-digit",
//     month: "long",
//     year: "numeric",
//   })
//   .replace(/ /g, " ");
