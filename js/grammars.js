/**
 * @author Emma
 */

var grammars = {
    neverbar : {
        vipTitle : ["Dr.", "Professor", "Lord", "Sir", "Captain", "His Majesty"],
        occupationBase : ["firefighter", "scientist", "spy", "smuggler", "mechanic", "astronaut", "adventurer", "pirate", "cowboy", "vampire", "detective", "soldier", "marine", "doctor", "ninja"],
        occupation : ["space #occupationBase#", "erotic #occupationBase#", "professional #occupationBase#", "gentleman #occupationBase#", "#occupationBase#"],
        name : ["Chesty", "Butch", "Saber", "Drake", "Thorax", "Brash", "Abs", "Burt", "Slate", "Bret", "Duke"],
        surnameStart : "Up Pants Chest Pants Chest Pants Chest Pants Chest Pants Chest Pants Chest Pants Chest Pants Chest West Long East North River South Snith Cross Aft Aver Ever Down Whit Rob Rod Hesel Kings Queens Ed Sift For Farring Coven Craig Cath Chil Clif Grit Grand Orla Prat Milt Wilt Berk Draft Red Black".split(" "),
        surnameEnd : "castle hammer master end wrench bottom hammer wick shire gren glen swith bury every stern ner brath mill bly ham tine field groat sythe well bow bone wind storm horn thorne cart bry ton man watch leath heath ley".split(" "),
        characterType : "android velociraptor dragon gorilla sasquatch alien squid cuttlefish".split(" "),
        character : ["#characterType#", "#characterMod# #characterType#"],

        drink : ["cup of chamomile tea", "glass of milk", "shot of vodka", "dry martini", "fuzzy navel", "appletini", "double shot of gin", "Campari", "glass of champagne", "bottle of Domaine Leroy Musigny Grand Cru"],
        said : ["purred", "whispered", "said", "murmurred", "growled"],
        characterMod : ["cybernetic", "robotic"],
        description : ["muscled", "sexy", "dark", "well-dressed", "masculine", "dramatic", "dramatically lit", "boyish", "burly", "handsome", "erotic"],
        surname : ["Mc#surnameStart.capitalize##surnameEnd#", "#surnameStart.capitalize##surnameEnd#"],

        locationAdj : ["dimly lit", "crowded", "smoke-filled"],
        locationBase : ["space station", "film studio", "70s nightclub", "undersea research station"],

        titleNoun : ["desire", "night", "awakening", "surrender", "obsession", "vision", "proposition", "game", "promise", "arrangement", "treasure", "dream", "embrace", "struggle", "pleasure", "discovery", "wish", "need"],
        titleAdj : ["dark", "erotic", "leather", "rough", "punishing", "burly", "country", "neon", "big-city", "whiskey", "shattered", "broken", "breathless", "tangled", "complicated", "captured", "priceless", "bound", "sinful", "forgotten", "forbidden", "gothic", "interstellar"],
        title : ["#titleAdj.a# #titleNoun#", "#titleAdj# #titleNoun.s#", "#mcName#'s #titleNoun#"],
       
response:[" <p>The #description# #scType# looked at him with interest.  'I'm #scName#.  #vipTitle# #scName# #surname#, #occupation#,' the #scType# #said#. 'I'll have #drink.a#.' <p>"],
        meeting: ["#scType.a.capitalize# was sitting by the bar, alone, #description#, #description#.  #mcName# introduced himself.  'I'm #mcName#', he #said#. 'I'm #occupation.a#.  Can I buy you a drink?'"],
 entry : ["...<p>#mcName# #surname# walked into the #locationAdj# #place#."],
        plot : ["<h2>#title.capitalizeAll#</h2><p>#entry#<p>#meeting#<p>#response#"],
        origin : "#[place:#locationBase#][mcType:#character#][scType:#character#][mcName:#name#][scName:#name#]plot#",

    },

    graphicscorebot: {
    "origin": [
        "#choicesandstrategies#"
    ],
    "choicesandstrategies": [
        "#preface##staff##clefs##group-path##lines##circles##circles##circles##circles##circles##circles##circles##circles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##ending#",
        "#preface##staff##clefs##group-path##lines##circles##circles##circles##circles##circles##circles##circles##circles##ending#",
        "#preface##staff##clefs##group-path##lines##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##ending#",
        "#preface##staff##clefs##circles##circles##circles##circles##circles##circles##circles##circles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##ending#",
        "#preface##staff##clefs##circles##circles##circles##circles##circles##circles##circles##circles##ending#",
        "#preface##staff##clefs##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##ending#",
        "#preface##staff##clefs##group-path##lines##ending#"
    ],

"preface":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"#baseh#\" width=\"#basew#\">",

"ending":"</svg>",

    "staff": [

"<rect y=\"75\" width=\"1224\" height=\"50\" style=\"fill:white;stroke:black;stroke-width:1.2;\" /><rect y=\"125\" width=\"1224\" height=\"50\" style=\"fill:white;stroke:black;stroke-width:1.2;\"/><rect y=\"175\" width=\"1224\" height=\"50\" style=\"fill:white;stroke:black;stroke-width:2;\" /><rect y=\"225\" width=\"1224\" height=\"50\" style=\"fill:white;stroke:black;stroke-width:1.2;\"/>",

"<rect y=\"80\" width=\"1224\" height=\"200\" style=\"fill:white;stroke:black;stroke-width:2;\"  />"
    ],


    "color": [
        "deeppink",
        "cyan",
        "yellow",
        "orange",
        "gray",
        "red",
        "crimson",
        "brown",
        "tomato",
        "orangered",
        "orchid",
        "palevioletred",
        "purple",
        "forestgreen",
        "darkorchid",
        "lawngreen",
        "rosybrown",
        "hotpink",
        "dodgerblue",
        "yellowgreen",
        "maroon",
        "darkorange",
        "blueviolet"
    ],
    "linecolor": [
        "cyan",
        "yellow",
        "orange",
        "gray",
        "red",
        "purple",
        "hotpink",
        "dodgerblue",
        "forestgreen",
        "black"
    ],
    "opacity": [
        "0",
        "0.1",
        "0.2",
        "0.3",
        "0.4",
        "0.5",
        "0.6",
        "0.7",
        "0.8",
        "0.9",
        "1",
        "1"
    ],
    "strokeopacity": [
        "0",
        "0.1",
        "0.2",
        "0.3",
        "0.4",
        "0.5",
        "0.6",
        "0.7",
        "0.8",
        "0.9",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1"
    ],

"strokewidth": [
        "7",        
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30"
    ],


"group-path":["<path d=\"M #basew200# #baseh# L 0 #basew200# L -30 1#digit##digit# #curvepoints#  M #basew200# #baseh# Z\"  fill=\"none\"  stroke=\"#linecolor#\"  stroke-dasharray=\"#dasharrays#\"  stroke-width=\"#strokewidth#\"></path>",
"<path d=\"M #basew200# #baseh# L #basew200# #baseh# L #basew200# 1#digit##digit# #curvepoints_r#  M 0 #baseh# Z\"  fill=\"none\"  stroke=\"#linecolor#\"  stroke-dasharray=\"#dasharrays#\"  stroke-width=\"#strokewidth#\"></path>"
],

    "curvepoints":["#curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint# #curvepoint#"],
    "curvepoints_r":["#curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r# #curvepoint_r#"],


"dist":["2#digit#","2#digit#","4#digit#","3#digit#","5#digit#","6#digit#","7#digit#","8#digit#"],
    "dist_half":["#digit#","#digit#","#0-5#"],
    "h_rel":["-2#digit#", "1#digit#", "-1#digit#","#digit#", "-#digit#","2#digit#"],
    "h_rel_half":["-#digit#", "#0-5#", "-#0-5#","#digit#"],
    "h" : ["2#digit##digit#","2#digit##digit#","3#digit##digit#","1#digit##digit#"],

"digit":["0","1","2","3","4","5","6","7","8","9"],
    "digittens":["1","2","3","4","5","6","7","8","9"],
    "0-1":["0","1"],
    "1-2":["1","2"],
    "0-2":["0","1","2"],
    "1-3":["3","1","2"],
    "0-4":["0","1","2","3","4"],
    "0-5":["0","1","2","3","4","5"],
    "1-5":["1","2","3","4","5"],
    "4-9":["4","5","6","7","8","9"],
    "hexdigit":["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],
    "highhex":["a","b","c","d","e","f"],

"percentages":[
    "5%",
    "10%",
    "15%",
    "20%",
    "25%",
    "30%",
    "35%",
    "38%",
    "40%",
    "45%",
    "50%",
    "55%",
    "57%",
    "60%",
    "65%",
    "70%",
    "75%",
    "80%",
    "85%",
    "90%",
    "95%"
],

    "curvepoint":"q #dist_half# #h_rel_half# #dist# #h_rel#",
    "curvepoint_r":"q -#dist_half# #h_rel_half# -#dist# #h_rel#",

"dasharray":["0","20","30","40","50","60","70","80","90", "100"],
    "dasharrays":["#yesdasharray#","#nodasharray#"],
    "yesdasharray":["#dasharray#,#dasharray#","#dasharray#,#dasharray#,#dasharray#","#dasharray#,#dasharray#,#dasharray#,#dasharray#","#dasharray#,#dasharray#,#dasharray#,#dasharray#,#dasharray#","#dasharray#,#dasharray#,#dasharray#,#dasharray#,#dasharray#,#dasharray#"],
    "nodasharray":["0,0"],

"tensandhundreds":["#digittens##digit#","#digit##digit#"],

"circles":["<circle cx=\"#percentages#\" cy=\"#percentages#\" r=\"#tensandhundreds#\" fill=\"#color#\"  stroke-width=\"0\"  fill-opacity=\"#opacity#\"  />",""
],

"rectangles":["<rect x=\"#percentages#\" y=\"#percentages#\" width=\"#tensandhundreds#\" height=\"#tensandhundreds#\"  fill=\"#color#\"  stroke-width=\"0\"  fill-opacity=\"#opacity#\" />",""],

"basew":"1224",
"basew200":"1424",
    "baseh":"350" 
},

}
