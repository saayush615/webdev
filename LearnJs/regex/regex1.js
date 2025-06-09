const regex = /Aayush/gi;
const str = "aayush is a software engineer. aayush is 50, he is aAyush";
console.log(str.replace(regex, "kaapy"));


const regex1 = /\s/g;
const str1 = "aayush is a software engineer. piyush is 50, he is aAyush";
console.log(str1.replace(regex, "-"));

const regex3 = /{aayushSingh}{2}/gi;
const str3 = "aayushSingh is a software engineer. piyush is 50, he is aayushSingh";
console.log(str3.replace(regex, "only-aayush"));