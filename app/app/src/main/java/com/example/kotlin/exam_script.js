var exam_script = {
    plus_num: function(num){
        try{
            window.java.getNum(num+num);
        }catch(err){
            console.log(">> [exam_script.plus_num()] " + err);
        }
    }
}
