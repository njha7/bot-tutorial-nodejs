const pasta = "👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit";

module.exports.goodShitParser = function(args){
    if(args.length > 1) {
        args.shift();
        return goodShitPasta(args.join(" "));
    } else {
        return goodShitPasta();
    }
};

var goodShitPasta = function(subject) {
    if(subject == null) {
        return pasta;
    } else {
        return pasta.replace(/shit/ig, subject);
    }
}

