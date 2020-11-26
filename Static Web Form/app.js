	function uniqueArray(value, index, self)
    {
        return self.indexOf(value) === index;
    }

    function wordFilter(array)
    {
        var negativeWordsLib = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];
        var filteredWords =[];
        var x = 0;
        var warning = "Would you kindly change or delete those words? &#128519"
        for (i = 0; i < array.length; i++)
        {
            for (j = 0; j < negativeWordsLib.length; j++)
            {
                if (array[i] == negativeWordsLib[j])
                {
                    filteredWords[x] = array[i];
                    x++;
                }
            }
        }
        var wordsCheck = filteredWords.filter(uniqueArray);
        var text = "<ul>";
	    for (i = 0; i < wordsCheck.length; i++) 
        {
		    text += "<li>" + wordsCheck[i] + "</li>";
	    }
	    text += "</ul>";
        if (x>0){
            document.getElementById("negativeWords").innerHTML = "&#128591 Sorry, you are not allowed to use these following explicit words: " + text;
            document.getElementById("warning").innerHTML = warning;
        }
    }

    function formProcess()
    {
        document.getElementById("negativeWords").innerHTML = "";
        document.getElementById("warning").innerHTML = "";
        var x = document.getElementById("form1");
        var text = "";
        var name = "";
        var email ="";
        var major = "";
        var i;
        for (i = 0; i < x.length-1 ;i++) 
        {
            if (i==0){
                name += x.elements[i].value;
            } else if (i==1){
                email += x.elements[i].value;
            } else if (i==2){
                major += x.elements[i].value;
            }else{
                text += x.elements[i].value;
            }
        }
        var emailArray = email.split("@");
        var commentWords = text.split(/(?:,| )+/);
        var totalWord;
        if (text=="")
        {
            totalWord = 0;
        }
        else 
        {
            totalWord = commentWords.length;
        }
        var commentCheck = text.toLowerCase().split(/[ ,.]+/);
        
        document.getElementById("hiResult").innerHTML = "&#128075 Hello there, " + name.bold() + " from " + major.bold() + "!\n";
        document.getElementById("emailResult").innerHTML = "&#128140 Your e-mail address is " + emailArray[0].bold() + " at " + emailArray[1].bold() + ".\n";
        document.getElementById("wordCount").innerHTML = "&#128290 Your comments word count are " + totalWord.toString().bold() + " word(s).";
        wordFilter(commentCheck);
    }
    
    function showDiv() 
    {
        document.getElementById('welcomeDiv').style.display = "block";
    }

    function hideDiv()
    {
        document.getElementById('welcomeDiv').style.display = "none";
        document.getElementById("negativeWords").innerHTML = "";
    }

    function validateForm() 
    {
        var x = document.forms["form1"]["fullname"].value;
        if (x == "") 
        {
            hideDiv();
            alert("Please fill in your name!");
            return false;
        }
        var x = document.forms["form1"]["email"].value;
        if (x == "") 
        {
            hideDiv();
            alert("Please fill in your e-mail!");
            return false;
        }
        const invalid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var x = document.forms["form1"]["email"].value;
        var y = invalid.test(x);
        if (y == false) 
        {
		      alert ("Invalid e-mail! format: name@email.domain");
		      return false;
	    }
        window.scrollTo(0, 500);
        formProcess();
        showDiv();
    }