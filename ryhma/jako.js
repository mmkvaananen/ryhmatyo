var konsultit = ["Inari Aaltojärvi", "Jukka Alkunen", "Olli Brummer",
"Anssi Forsman", "Mikko Huttunen", "Satu Immonen",
"Sari Kallio", "Maria Kauppi", "Janne Kokki",
"Niko Kuki", "Antti László", "Sanna Launonen",
"Riina Moilanen", "Laura Muttilainen", "Ville Paronen",
"Juhani Riisiö", "Albert Spoljaric", "Mari Väänänen"];
var lkm1 = 0;
var lkm2 = 0;
var lkm3 = 0;
var lkm4 = 0;

function random() {
   
    var r = Math.floor(Math.random()*4) + 1);
    if (r == 1) {
        if (lkm1 < 5) {
            lkm1 +=1;
            return r;
        }
        random();
    }
    else if (r == 2) {
        if (lkm2 < 5) {
            lkm2 +=1;
            return;
        }
        random();
    }
    else if (r == 4) {
        if (lkm3 < 4) {
        lkm3 +=1;
        return r;
    }
        random();
    }
    else if (r == 4) {
        if (lkm4 < 4) {
        lkm4 +=1;
        return;
    }
    random();
        
    }

}

function jaa() {
    var konsultitRyhmässä = [];
    for (var i = 0; i <konsultit.length; i++) {
        konsultitRyhmässä[i] = konsultit[i] + " " + random();

    }
}

