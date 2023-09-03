function eval() {
    var cal = document.form.display.value;
    document.form.content.value = cal;
    var b, c, e, f, g, h, i;
    cal = cal.replace('*', 'a');
    cal = cal.replace('/', 'b');
    cal = cal.replace('+', 'c');
    cal = cal.replace('-', 'd');
    f = /a/;
    g = /b/;
    h = /c/;
    i = /d/;
    if (f.test(cal)) {
      c = cal.indexOf('a');
      e = Number(cal.substr(0, c));
      b = Number(cal.substr(c + 1, cal.length - 1));
      return e * b;
    } else if (g.test(cal)) {
      c = cal.indexOf('b');
      e = Number(cal.substr(0, c));
      b = Number(cal.substr(c + 1, cal.length - 1));
      return e / b;
    } else if (h.test(cal)) {
      c = cal.indexOf('c');
      e = Number(cal.substr(0, c));
      b = Number(cal.substr(c + 1, cal.length - 1));
      return e + b;
    } else {
      c = cal.indexOf('d');
      e = Number(cal.substr(0, c));
      b = Number(cal.substr(c + 1, cal.length - 1));
      return e - b;
    }
  }