const FindLuckNumber = () => {
  //name to lower case

  let luckyNum = 0;
  let tmpName = "";
  let nameWithNumber = [];
  let alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

  currentName = namesArr1[0];

  //loop names array
  for (let i = 0; i <= namesArr1.length - 1; i++) {

    let tmpName = namesArr1[i];
    let nameDigits = [];
	let total = 0;
	
    for (let j = 0; j <= tmpName.length - 1; j++) {
      for (let k = 0; k < alphabet.length - 1; k++) {
        if (tmpName[j] === alphabet[k]) {
          total += k + 1;
          nameDigits.push(k + 1);
        }
      }
	}
	
    let tmp = 0;
    for (let n = 0; n < nameDigits.length; n++) {
      tmp += nameDigits[n];
    }
    nameWithNumber.push({ name: tmpName, luckyNum: tmp });
  }

  //sort
  console.log("length " + nameWithNumber.length);

  for (let q = 0; q < nameWithNumber.length - 1; q++) {
    for (let v = 0; v < nameWithNumber.length - 1 - q; v++) {
      if (nameWithNumber[v].luckyNum == nameWithNumber[v + 1].luckyNum) {

        let name1 = nameWithNumber[v].name.split("");
        let name2 = nameWithNumber[v + 1].name.split("");

        let a = 0;
        let checkNameLetter = (name1, name2) => {

          if (name1[a] == name2[a + 1]) {
            a++;
			checkNameLetter = (name1, name2);
          } else if (name1[a] > name2[a]) {
            const temp = nameWithNumber[v];
            nameWithNumber[v] = nameWithNumber[v + 1];
            nameWithNumber[v + 1] = temp;
          }
        };

        checkNameLetter(name1, name2);
      } else if (nameWithNumber[v].luckyNum > nameWithNumber[v + 1].luckyNum) {
        const temp = nameWithNumber[v];
        nameWithNumber[v] = nameWithNumber[v + 1];
        nameWithNumber[v + 1] = temp;
      }
    }
  }
  console.log(nameWithNumber);
};

module.exports = { FindLuckNumber };