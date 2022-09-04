var Body = {
  setColor:function (color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

var Links = {
  setColor:function (color, currentPage) {
    var alist = document.querySelectorAll('a');
    for(var i = 0; i < alist.length; i++) {
      if(i == currentPage) continue;
      alist[i].style.color = color;
    }
  }
}

var Ul = {
  setBorderColor:function(color) {
    document.querySelector('ul').style.borderColor = color;
  }
}

function SCREEN_VER(self, currentPage) {
  if(self.value == 'dark') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Ul.setBorderColor('white');
    Links.setColor('white', currentPage);
    self.value = 'light';
  }
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Ul.setBorderColor('black');
    Links.setColor('black', currentPage);
    self.value = 'dark';
  }
}
