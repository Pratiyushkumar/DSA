function isIsomorphic(s: string, t: string) {
  let map1 = new Map();
  let map2 = new Map();
  let n = s.length;

  for (let i = 0; i < n; i++) {
    if (!map1.has(s[i]) && !map2.has(t[i])) {
      map1.set(s[i], t[i]);
      map2.set(t[i], s[i]);
    } else if (map1.get(s[i]) !== t[i] || map2.get(t[i]) !== s[i]) {
      return false;
    }
  }
  return true;
}

// console.log(isIsomorphic('egg', 'add'));
// console.log(isIsomorphic('foo', 'bar'));
// console.log(isIsomorphic('badc', 'kikp'));
// console.log(isIsomorphic('badc', 'baba'));

function isIsomorphicOptimized(s: string, t: string) {
  let compMap = new Map();
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let schar = s[i];
    let tchar = t[i];
    if (compMap.has(schar)) {
      if (compMap.get(schar) !== tchar) {
        return false;
      }
    } else if (Array.from(compMap.values()).includes(tchar)) {
      return false;
    } else {
      compMap.set(schar, tchar);
    }
  }
  return true;
}
