function PassworGenerator(length) {		
    var chars = [];
    chars['l'] = 'abcdefghijklmnoprstuvwxyz';
    chars['U'] = chars['l'].toUpperCase();
    chars['v'] = 'aeiouy';
    chars['V'] = chars['v'].toUpperCase();
    chars['c'] = 'bcdfghjklmnprstvwxz';
    chars['C'] = chars['c'].toUpperCase();
    chars['9'] = '0123456789';
    chars['#'] = '!@#$%^&*_-+=()[]{}';
    chars['a'] = chars['l'] + chars['9'] + chars['l'].toUpperCase();
    chars['A'] = chars['a'].toUpperCase();
    var template = 'vccvcvccvcvccvcvccvc';
	var templatestat = 'C';
	var templateend = '99';
    var i, c, possible;
    var passwords = [];
    for (i = 0; i < 1; i++) {
        password = '';
        var array = new Uint8Array(length)
        window.crypto.getRandomValues(array);
        for (c = 0; c < 1; c++) {
            possible = chars[templatestat.charAt(c)];
            password += possible.charAt(Math.floor(array[c] / 256 * possible.length));
        }
		 for (c = 0; c < length-3; c++) {
            possible = chars[template.charAt(c)];
            password += possible.charAt(Math.floor(array[c] / 256 * possible.length));
        }
		 for (c = 0; c < 2; c++) {
            possible = chars[templateend.charAt(c)];
            password += possible.charAt(Math.floor(array[c] / 256 * possible.length));
        }
		
        passwords.push(password);
    }
	return password;
}
