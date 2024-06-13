setInterval(function() {
    textarea();
    charcount();
    wordcount();
    // sentcount();
    linecount();
  }, 0)

  function textarea() {
    return $('textarea').val();
  }

  function charcount() {
    return $('#char_count').text(textarea().length);
  }

  function wordcount() {
    var count=0;
    var words = textarea().split(' ');
    for (var i=0; i<words.length; i++) {
        if (words[i] != "")
            count++;
    }
    return $('#word_count').text(count);
  }

//   function sentcount() {
//     var res = "hello. awd! awd. awd ".search(/\w[.?!]/g);
//     return $('#sent_count').text(res);
//   }

  function linecount() {
    if (textarea()=="")
        return $('#line_count').text(0);
    return $('#line_count').text((textarea().match(/\n/g) || '').length + 1);
  }
  
  $('#sentence').click(function() {
    var sentence = textarea().toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,
    function(c) {
        return c.toUpperCase();
    })
    $('textarea').val(sentence);
  })

  $('#lower').click(function() {
    var lower = textarea().toLowerCase();
    $('textarea').val(lower);
  })

  $('#upper').click(function() {
    var upper = textarea().toUpperCase();
    $('textarea').val(upper);
  })

  $('#title').click(function() {
    var res = [];
    lines = textarea().toLowerCase().split('\n');
    for (var i = 0; i < lines.length; i++) {
        text = lines[i].split(' ');
        for (var j = 0; j < text.length; j++) {
            text[j] = text[j].charAt(0).toUpperCase() + text[j].slice(1);
        }
        line = text.join(' ');
        res.push(line);
    }
    $('textarea').val(res.join('\n'));
  })

  $('#clear').click(function() {
    $('textarea').val("");
  })

  $('#copy').click(function() {
    navigator.clipboard.writeText(textarea());
    $('#copy').text("Copied!");
    $('#content').select();
    setTimeout(function () {$('#copy').text("Copy")},2000);
  })
