var defaultAffirmations = "I feel calm and relaxed,I breathe slowly and deeply,With each breath I become more relaxed,I breathe as a calm relaxed person,I feel completely carefree,I am free of worldly cares,I am free of unwanted stress,It is healthy and wise to let go and relax,I choose to enjoy this moment,I feel very positive and confident,I feel so peaceful and calm,I feel so comfortable,I feel like smiling,I am smiling,I am happy and content – and so relaxed,I am at peace with myself,I accept myself,My self-esteem is growing daily,I love the real me,I’m happy being who I am,All I have to be is me,My life is meaningful,My life is important,I’ll now be the best me I can be,I don’t have to be perfect; I just choose to be perfectly me,I now recognize my talents and skills,I feel good about myself,I feel better each moment,I’m happy being me,The more I accept and love myself the more I can accept andlove others,I now control my thoughts,I now control my feelings,I’m building a storehouse of positive energy,I’m storing positive thoughts,I’m storing positive images,I am in charge of my mind,I am in charge of my life,I choose to be positive,I am positive,I have great potential and I’m going to use it,Every day life gets better & better,I expect good things to happen,I see something positive in all situations,I turn negatives into positives,I am totally positive";

var defaultQuote = "God grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.";

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('saveOptions').addEventListener('click', saveOptions);
    document.getElementById('reloadOptions').addEventListener('click', reloadOptions);
    loadOptions();
});

function loadOptions()
{
    var affirmations = localStorage.affirmations;
    var quote        = localStorage.quote;

    if (affirmations === undefined) {
        localStorage.affirmations = defaultAffirmations;
    } else {
        document.getElementById("affirmations").value = affirmations;
    }

    if (quote === undefined) {
        localStorage.quote = defaultQuote;
    } else {
        document.getElementById("quote").value = quote;
    }
}

function saveOptions()
{
    var affirmations = document.getElementById("affirmations").value;
    var quote        = document.getElementById("quote").value;

    localStorage.affirmations = affirmations;
    localStorage.quote        = quote;

    if (affirmations === undefined || !affirmations) {
        localStorage.affirmations = defaultAffirmations;
    }

    if (quote === undefined || !quote) {
        localStorage.quote = defaultQuote;
    }
}

function reloadOptions()
{
    localStorage.removeItem('affirmations');
    localStorage.removeItem('quote');
    location.reload();
}
