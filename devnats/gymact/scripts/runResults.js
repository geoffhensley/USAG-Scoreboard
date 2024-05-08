function runResults(){
    /* Individual Apps */
    $.getJSON("./scripts/scoreboard.php?d=M", function(json){
        $.each(json, function(i, item) {
          var bonus = item.bonus;
          var deduction = item.deduction;
          var difficulty = item.difficulty;
          var event = item.event;
          var execution = item.execution;
          var level = item.level;
          var nameRaw = parseName(item.name);
          var name = null;
          if (nameRaw.name != null || nameRaw.name != undefined) { 
            var name = nameRaw.name + "<br>" + nameRaw.lastName + "&nbsp;" + nameRaw.secondLastName;
          }
          var position = item.position;
          var program = item.program;
          var total = item.total;

          if(event == "FLOOR"){
            if (total != null || total != "") { 
              $("#fx-score").text(total);
            } else {
              $("#fx-score").text("");
            }
            if (name != null || name != "") { 
              $("#fx-name").html(name);
            } else {
              $("#fx-name").text("");
            }
          }
          if(event == "POMMEL"){
            if (total != null || total != "") { 
              $("#ph-score").text(total);
            } else {
              $("#ph-score").text("");
            }
            if (name != null || name != "") { 
              $("#ph-name").html(name);
            } else {
              $("#ph-name").text("");
            }
          }
          if(event == "RINGS"){
            if (total != null || total != "") { 
              $("#sr-score").text(total);
            } else {
              $("#sr-score").text("");
            }
            if (name != null || name != "") { 
              $("#sr-name").html(name);
            } else {
              $("#sr-name").text("");
            }
          }
          if(event == "VAULT"){
            if (total != null || total != "") { 
              $("#vt-score").text(total);
            } else {
              $("#vt-score").text("");
            }
            if (name != null || name != "") { 
              $("#vt-name").html(name);
            } else {
              $("#vt-name").text("");
            }
          }
          if(event == "P BARS"){
            if (total != null || total != "") { 
              $("#pb-score").text(total);
            } else {
              $("#pb-score").text("");
            }
            if (name != null || name != "") { 
              $("#pb-name").html( name);
            } else {
              $("#pb-name").text("");
            }
          }
          if(event == "H BAR"){
            if (total != null || total != "") { 
              $("#hb-score").text(total);
            } else {
              $("#hb-score").text("");
            }
            if (name != null || name != "") { 
              $("#hb-name").html(name);
            } else {
              $("#hb-name").text("");
            }
          }
        });
    });

    // Team Scores
    $.getJSON("./scripts/teamscores.php?m=gact23&ses=1", function(json){
      $.each(json, function(i, item) {
        var rank = item.rank;
        var team = item.name;
        var score = item.total;

        teamUpdate(team, rank, score);
      });
    });
}

function teamUpdate(team, rank, score) {
    if (team == null || team == undefined || team == "") { 
      $("#team-" + rank).find('.team-icon').attr("src", "");
      $("#team-" + rank).find('.team-name').text("").css('color', '#000000');
      $("#team-" + rank).find('.team-score').text("").css('color', '#000000');

      return;
    }
    var teamDeets = teamCodes(team);

    if (teamDeets === false) {
      $("#team-" + rank).find('.team-icon').attr("src", "");
      $("#team-" + rank).find('.team-name').text("").css('color', '#000000');
      $("#team-" + rank).find('.team-score').text("").css('color', '#000000');

      return;
    }

    $("#team-" + rank).find('.team-icon').attr("src", "./images/logos/" + teamDeets.logo);
    $("#team-" + rank).find('.team-name').text(teamDeets.title).css('color', teamDeets.primary);
    $("#team-" + rank).find('.team-score').text(score).css('color', teamDeets.secondary);
  }

  function teamCodes(team) {
    var result = {};

    // Arizona State Gymnastics
    if (team == "Arizona State") {
      result.primary = "#640000";
      result.secondary = "#000000";
      result.title = "Arizona State Gymnastics";
      result.logo = "as.png";
    }

    // Georgia United
    else if (team == "GA United") {
      result.primary = "#212C64";
      result.secondary = "#212C64";
      result.title = "Georgia United";
      result.logo = "gu.png";
    }

    // Iowa
    else if (team == "Iowa GymACT") {
      result.primary = "#272425";
      result.secondary = "#333";
      result.title = "Iowa";
      result.logo = "ia.png";
    }

    // Kansas City United
    else if (team == "Kansas City United") {
      result.primary = "#272425";
      result.secondary = "#333";
      result.title = "Kansas City United";
      result.logo = "kc.png";
    }

    // Minnesota
    else if (team == "Minnesota GymACT") {
      result.primary = "#3D0114";
      result.secondary = "#3D0114";
      result.title = "Minnesota";
      result.logo = "mg.png";
    }

    // Northern Illinois University 
    else if (team == "NIU") {
      result.primary = "#000000";
      result.secondary = "#CF152D";
      result.title = "Northern Illinois University";
      result.logo = "ni.png";
    }

    // New York Alliance
    else if (team == "New York Alliance") {
      result.primary = "#242021";
      result.secondary = "#F7662F";
      result.title = "New York Alliance";
      result.logo = "ny.png";
    }

    // Bay Area Bandits
    else if (team == "Bay Area Bandits") {
      result.primary = "#000000";
      result.secondary = "#ED1C24";
      result.title = "Bay Area Bandits";
      result.logo = "bb.png";
    }

    // Rocky Mountain Mavericks
    else if (team == "Mavericks") {
      result.primary = "#1A2B59";
      result.secondary = "#F16822";
      result.title = "Rocky Mountain Mavericks";
      result.logo = "rm.png";
    }

    // SC United
    else if (team == "SC United") {
      result.primary = "#1B1B1D";
      result.secondary = "#1B1B1D";
      result.title = "SC United";
      result.logo = "sc.png";
    }

    // Temple University
    else if (team == "Temple") {
      result.primary = "#000000";
      result.secondary = "#9E1B34";
      result.title = "Temple University";
      result.logo = "tu.png";
    }

    // Texas Armadillos
    else if (team == "Texas Armadillos") {
      result.primary = "#000000";
      result.secondary = "#CA2B1E";
      result.title = "Texas";
      result.logo = "tx.png";
    }

    // University of Illinois at Chicago
    else if (team == "UIC") {
      result.primary = "#000000";
      result.secondary = "#CA2B1E";
      result.title = "University of Illinois at Chicago";
      result.logo = "uc.png";
    }

    // Washington Men’s Gymnastics
    else if (team == "Washington") {
      result.primary = "#3C2D70";
      result.secondary = "#3C2D70";
      result.title = "Washington Men’s Gymnastics";
      result.logo = "wm.png";
    }

    else {
      return false;
    }

    return result;
  }

  function parseName(input) {
    var fullName = input || "";
    var result = {};

    if (fullName.length > 0) {
        var nameTokens = fullName.match(/[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g) || [];

        if (nameTokens.length > 3) {
            result.name = nameTokens.slice(0, 2).join(' ');
        } else {
            result.name = nameTokens.slice(0, 1).join(' ');
        }

        if (nameTokens.length > 2) {
            result.lastName = nameTokens.slice(-2, -1).join(' ');
            result.secondLastName = nameTokens.slice(-1).join(' ');
        } else {
            result.lastName = nameTokens.slice(-1).join(' ');
            result.secondLastName = "";
        }
    }

    return result;
  }