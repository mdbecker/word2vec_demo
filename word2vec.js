var starting = [
    ['man', 'king', 'woman'],
    ['man', 'emperor', 'woman'],
    ['Japan', 'sushi', 'Germany'],
    ['cat', 'kitten', 'dog'],
    ['big', 'biggest', 'small'],
    ['Athens', 'Greece', 'Oslo'],
    ['brother', 'sister', 'grandson'],
    ['France', 'Paris', 'Japan'],
    ['Einstein', 'scientist', 'Mozart'],
    ['Einstein', 'scientist', 'Picasso'],
    ['Japan', 'sushi', 'Germany'],
    ['China', 'Beijing', 'Russia'],
    ['Microsoft', 'Steve_Ballmer', 'Apple'],
    ['Microsoft', 'Steve_Ballmer', 'Google'],
    ['Luke', 'Star_Wars', 'Picard'],
    ['Hipsters', 'New_York', 'Rednecks'],
    ['lawyer', 'liar', 'politician'],
    ['Arnold_Schwarzenegger', 'Predator', 'Sylvester_Stallone'],
    ['Metallica', 'rock', 'Snoop_Dog'],
    ['science', 'fact', 'politics']
];
var random = starting[Math.floor(Math.random()*starting.length)];
$('#first').val(random[0]);
$('#isto').val(random[1]);
$('#second').val(random[2]);

$('#analogy_form').submit(function () {
    submitform();
    return false;
});

function submitform(){
    var formData = JSON.stringify($("#analogy_form").serializeArray());
    var otherFormData = $("#analogy_form").serializeArray();
    var negative = [otherFormData[0].value];
    var positive = [otherFormData[1].value, otherFormData[2].value];
    var analogy = {'positive': positive, 'negative': negative, 'topn': 10};
    $.ajax({
        url:'http://localhost:5000/most_similar',
        type:'POST',
        contentType: "application/json",
        dataType:'json',
        data: JSON.stringify(analogy),
        success: function(json){
            $('#result').val(json.result[0][0]);
        }
    });
}
