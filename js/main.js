const singers = [
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
  ];


  // sort()
// if else
// return

// sort by name
singers.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });

  console.log(singers)

  // Korrektur

  // singers.sort(function (a, b) {
  //   let nameA = a.name;
  //   console.log("this is a-name: " + nameA);
  //   let nameB = b.name;
  //   console.log("this is b-name: " + nameB);
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  //   return 0;
  // });
  // console.log(singers);
  
  
  
  
  
  
  // Elaine (supercode)  15:32 Uhr
  // Variante2:
  // function compare(a, b) {
  //   const nameA = a.name;
  //   console.log("nameA is " + nameA);
  //   const nameB = b.name;
  //   console.log("nameB is " + nameB);
  //   let comparison = 0;
  //   if (nameA > nameB) {
  //     comparison = 1;
  //   } else if (nameA < nameB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // }
  // console.log(singers.sort(compare));
  // 15:34 Uhr
  // Variante3:
  // let singersSorted = []
  // singersSorted = singers.sort((elt1, elt2) => {
  //     if (elt1.name < elt2.name) {
  //         return -1
  //     } else if (elt1.name > elt2.name) {
  //         return 1
  //     } else {
  //         return 0
  //     }
  // })
  // console.log(singersSorted)