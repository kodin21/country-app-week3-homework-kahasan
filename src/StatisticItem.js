import Card from './Card';

function StatisticItem({ countries }) {
  const languages = [];
  const language = [];

  //We got whole countries array
  //Find the languages array in the countries array and push them languages variable
  countries.map((country) => languages.push(country.languages));

  //We need languages.name values. Find that values in languages array and push them into language variable
  languages.map((myLanguage) =>
    myLanguage.map((eachLanguage) => language.push(eachLanguage.name))
  );

  //Find dublicate values and count them
  function findDublicate(array) {
    const count = {};
    const result = [];

    array.forEach((item) => {
      if (count[item]) {
        count[item] += 1;
        return;
      }
      count[item] = 1;
    });

    for (let prop in count) {
      if (count[prop] >= 2) {
        result.push(prop);
      }
    }

    return count;
  }

  let foundDublicate = findDublicate(language);

  //Sort last array
  var sortable = [];
  for (var vehicle in foundDublicate) {
    sortable.push([vehicle, foundDublicate[vehicle]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  return (
    <div>
      {sortable.map((ab, index) => (
        <Card key={index} name={ab[0]} count={ab[1]} />
      ))}
    </div>
  );
}

export default StatisticItem;