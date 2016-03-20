/**
 * @author Emma
 */

var grammars = {
    graphicscorebot: {
    "origin": [
        "#choicesandstrategies#"
    ],
    "choicesandstrategies": [
        "#preface##staff##clefs##group-path##lines##circles##circles##circles##circles##circles##circles##circles##circles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##notes##notes##notes##dynamic##ending#",
        "#preface##staff##clefs##group-path##lines##circles##circles##circles##circles##circles##circles##circles##circles##notes##notes##notes##dynamic##ending#",
        "#preface##staff##clefs##group-path##lines##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##notes##notes##notes##dynamic##ending#",
        "#preface##staff##clefs##circles##circles##circles##circles##circles##circles##circles##circles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##notes##notes##notes##dynamic##ending#",
        "#preface##staff##clefs##circles##circles##circles##circles##circles##circles##circles##circles##notes##notes##notes##dynamic##ending#",
        "#preface##staff##clefs##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##rectangles##notes##notes##notes##dynamic##ending#",
        "#preface##staff##clefs##group-path##lines##notes##notes##notes##dynamic##ending#"
    ],

"preface":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"#baseh#\" width=\"#basew#\">",

"ending":"</svg>",

    "staff": [

"<rect y=\"75\" width=\"1224\" height=\"50\" style=\"fill:white;stroke:black;stroke-width:1.2;\" /><rect y=\"125\" width=\"1224\" height=\"50\" style=\"fill:white;stroke:black;stroke-width:1.2;\"/><rect y=\"175\" width=\"1224\" height=\"50\" style=\"fill:white;stroke:black;stroke-width:2;\" /><rect y=\"225\" width=\"1224\" height=\"50\" style=\"fill:white;stroke:black;stroke-width:1.2;\"/>",

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
        "3",
        "4",
        "5",
        "6",
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

"clefs": ["", "", "",

"<path transform=\"translate(0,200) scale(0.10000000149011612,-0.10000000149011612)\" d=\"m733,1235c-105,-23 -190,-70 -269,-149c-109,-110 -151,-220 -142,-377c8,-152 78,-260 189,-293c66,-20 102,-20 167,-1c62,19 115,62 145,119c31,59 31,203 0,261c-72,135 -224,165 -350,69l-33,-25l0,33c0,52 42,129 96,177c90,80 202,117 330,109c166,-11 275,-120 329,-331c80,-315 43,-658 -96,-888c-68,-115 -119,-177 -216,-269c-110,-104 -247,-195 -419,-275c-243,-114 -246,-117 -212,-139c28,-18 375,120 560,223c200,111 396,274 508,422c73,98 151,255 180,364c27,100 38,326 21,435c-39,251 -181,437 -387,508c-124,43 -281,53 -401,27z\"/><path d=\"m1796,1059c-34,-10 -63,-35 -82,-71c-41,-80 21,-178 113,-178c59,0 93,20 121,68c27,49 27,62 3,111c-31,60 -92,88 -155,70z\"/><path d=\"m1762,460c-34,-21 -62,-72 -62,-112c0,-68 74,-133 143,-124c53,6 84,30 109,81l22,45l-22,45c-38,79 -120,107 -190,65z\"/>",

"<path transform=\"translate(0,300) scale(0.10000000149011612,-0.10000000149011612)\" d=\"m995,2906c-75,-33 -166,-179 -205,-329c-30,-119 -34,-223 -16,-386c10,-79 13,-147 9,-151c-287,-234 -404,-384 -454,-578c-34,-132 -19,-263 45,-395c45,-92 108,-164 199,-225c103,-68 190,-94 301,-90c80,3 87,1 91,-17c16,-75 36,-279 33,-339c-4,-97 -37,-160 -103,-201c-42,-26 -58,-30 -119,-30c-52,0 -81,5 -110,21c-50,26 -55,39 -15,42c56,4 100,32 120,76c23,52 23,90 0,142c-45,98 -156,123 -236,53c-92,-81 -82,-238 21,-329c42,-36 75,-52 150,-69c88,-21 221,24 284,95c70,81 81,155 51,374c-12,85 -23,164 -26,175c-3,16 7,25 57,49c206,96 286,353 178,572c-54,111 -163,182 -287,187c-62,2 -55,-12 -79,165l-16,124l94,96c140,143 186,235 208,416c28,216 -19,456 -104,541c-29,29 -30,29 -71,11zm80,-242c23,-9 45,-58 45,-101c0,-59 -27,-149 -67,-225c-39,-74 -204,-259 -219,-245c-4,4 -8,65 -8,135c0,113 3,136 27,206c60,171 145,259 222,230zm-236,-971c7,-60 14,-117 17,-128c4,-16 -4,-24 -43,-40c-145,-59 -234,-252 -189,-407c25,-87 117,-178 181,-178c26,0 17,16 -24,43c-130,86 -93,307 63,367c16,6 31,8 34,5c3,-3 22,-127 42,-275l36,-270l-34,-6c-18,-4 -70,-4 -115,-2c-66,3 -95,11 -149,37c-230,110 -302,360 -175,606c23,44 70,99 179,208c81,81 152,147 156,147c5,0 14,-48 21,-107zm196,-357c102,-47 151,-136 143,-263c-6,-92 -28,-143 -86,-195c-36,-32 -79,-56 -86,-46c-2,1 -17,113 -35,248c-17,135 -33,253 -35,263c-6,25 37,22 99,-7z\"/>"


],

"group-path":["<path d=\"M #basew200# #baseh# L 0 #basew200# L -30 1#digit##digit# #curvepoints#  M #basew200# #baseh# Z\"  fill=\"none\"  stroke=\"#color#\"  stroke-dasharray=\"#dasharrays#\"  stroke-width=\"#strokewidth#\"></path>",
"<path d=\"M #basew200# #baseh# L #basew200# #baseh# L #basew200# 1#digit##digit# #curvepoints_r#  M 0 #baseh# Z\"  fill=\"none\"  stroke=\"#color#\"  stroke-dasharray=\"#dasharrays#\"  stroke-width=\"#strokewidth#\"></path>"
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
    "digithundreds":["1","2","3","4","5","6","7","8","9"],
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

"widths":[
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
    "60",
    "65",
    "70",
    "75",
    "80",
    "85",
    "90",
    "95",
    "#digithundreds#00",
    "#digithundreds#05",
    "#digithundreds##digithundreds#10",
    "#digithundreds#15",
    "#digithundreds##digithundreds#20",
    "#digithundreds#25",
    "#digithundreds#30",
    "#digithundreds#35",
    "#digithundreds#40",
    "#digithundreds#45",
    "#digithundreds#50",
    "#digithundreds#55",
    "#digithundreds#60",
    "#digithundreds#65",
    "#digithundreds#70",
    "#digithundreds#75",
    "#digithundreds#80",
    "#digithundreds#85",
    "#digithundreds#90",
    "#digithundreds#95",
    "1#0-2#00",
    "1#0-2#05",
    "1#0-2#10",
    "1#0-2#15",
    "1#0-2#20",
    "1#0-2#25",
    "1#0-2#30",
    "1#0-2#35",
    "1#0-2#40",
    "1#0-2#45",
    "1#0-2#50",
    "1#0-2#55",
    "1#0-2#60",
    "1#0-2#65",
    "1#0-2#70",
    "1#0-2#75",
    "1#0-2#80",
    "1#0-2#85",
    "1#0-2#90",
    "1#0-2#95"
],

"heights": [
    "#0-4#00",
    "#0-4#05",
    "#0-4#10",
    "#0-4#15",
    "#0-4#20",
    "#0-4#25",
    "#0-4#30",
    "#0-4#35",
    "#0-4#40",
    "#0-4#45",
    "#0-4#50",
    "#0-4#55",
    "#0-4#60",
    "#0-4#65",
    "#0-4#70",
    "#0-4#75",
    "#0-4#80",
    "#0-4#85",
    "#0-4#90",
    "#0-4#95"
],


"crotchet":[""],


"lines":["#line1#, #line2#"], 

"line1":["<polyline points=\"#widths# #heights#, #widths# #heights#, #widths# #heights#, #widths# #heights#\" stroke-dasharray=\"#dasharrays#\" style=\"fill:none;stroke:#color#;stroke-width:20;\" stroke-opacity=\"#opacity#\"   />"],

"line2":["<path d=\"M #widths# #heights# q #widths# #heights# #widths# #heights# #widths# #heights# #widths# #heights# #widths# #heights# #widths# #heights# q #widths# #heights# #widths# #heights# #widths# #heights# #widths# #heights# #widths# #heights# #widths# #heights# q #widths# #heights# #widths# #heights# #widths# #heights# #widths# #heights# #widths# #heights# #widths# #heights# #widths# #heights# #widths# #heights# 400 100 \" stroke-dasharray=\"#dasharrays#\" style=\"fill:none;stroke:#color#;stroke-width:4;\" stroke-opacity=\"#strokeopacity#\"  />"],


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

"notes": ["#stems#<ellipse cx=\"#percentages#\" cy=\"#percentages#\" rx=\"20\" ry=\"15\" fill=\"#color#\"  stroke-width=\"0\" stroke=\"#color#\"  fill-opacity=\"#opacity#\"  />"],

"stems":["<rect x=\"#percentages#\" y=\"#percentages#\" width=\"2\" height=\"60\"  fill=\"#color#\"  stroke-width=\"0\" stroke-opacity=\"#opacity#\"  fill-opacity=\"#opacity#\" />"],

"blackwhite": ["black","none"],

"basew":"1224",
"basew200":"1424",
    "baseh":"350" 
},

}