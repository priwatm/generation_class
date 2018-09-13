var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-57622-11']);
_gaq.push(['_trackPageview']);



(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
})();

 


function generatePasswords(template, number) {
    var chars = {}
    chars['l'] = 'abcdefghijklmnoprstuvwxyz';
    chars['U'] = chars['l'].toUpperCase();
    chars['v'] = 'aeiouy';
    chars['V'] = chars['v'].toUpperCase();
    chars['c'] = 'bcdfghjklmnprstvwxz';
    chars['C'] = chars['c'].toUpperCase();
    chars['9'] = '0123456789';
    chars['#'] = '!@#$%^&*_-+=()[]{}';
    chars['a'] = chars['l'] + chars['9'] + chars['l'].toUpperCase() ;
    chars['A'] = chars['a'].toUpperCase();

    var i, c, possible;

    var passwords = [];
    for (i = 0; i < number; i++) {
        password = '';
        var array = new Uint8Array(template.length)
        window.crypto.getRandomValues(array);
        for (c = 0; c < template.length; c++) {
            possible = chars[template.charAt(c)];
            password += possible.charAt(Math.floor(array[c] / 256 * possible.length));
        }
        passwords.push(password);
    }

    return passwords;
}

function doPasswords() {
      $('#passwords li').remove();
    var template = 'Cvccvc99';
  passwords = generatePasswords(template, 1);

  var passwordlist = $("ul#passwords");
  $.each(passwords, function(i, password) {
      passwordlist.append($("<li>").text(password));
  });
  mixpanel.track("Generated passwords");
}

