function lunbo(){
    let img;
    this.Left = function(box1,box2,box3, style, imgList, typeList, noChangeImgList, imgStatus){
        const carousel1 = document.querySelector(box1);
        const carousel2 = document.querySelector(box2);
        const carousel3 = document.querySelector(box3);
        const Transform = document.querySelector(style);
        const carousellog = document.querySelectorAll(".carousellog");
        const bodyimgDrop = document.querySelector(".bodyimgDrop");
		const bodsad = 1;
		console.log(bodsad);
        const carouselBt = document.querySelectorAll(".carouselBt>ul>li");
        if (carousel1.style.transform.indexOf("scale(1.1)") != -1){
            carousel1.style.animation = "move1 0.5s";
            carousel2.style.animation = "move2 0.5s";
            carousel3.style.animation = "move3 0.5s";
            // let lastImg = imgList.pop();
            // imgList.unshift(lastImg);
            // let lastType = typeList.pop();
            // typeList.unshift(lastType);
            if ( imgStatus == 0){
                imgStatus = imgList.length - 1;
            }else{
                imgStatus = imgStatus - 1;
            }
            carousellog[1].style.backgroundColor = typeList[imgStatus == 0? imgList.length - 1: imgStatus - 1].split(",")[1];
            carousellog[1].innerHTML = typeList[imgStatus == 0? imgList.length - 1: imgStatus - 1].split(",")[0];
            setTimeout(function(){carousel1.style.animation ="";carousel2.style.animation ="";carousel3.style.animation ="";},500);
            Transform.innerHTML = "@keyframes move1"+
            "{"+
            "0% {transform:translateX(195px);z-index:5;}"+
            "100%{transform:translateX(390px)}"+
            "}"+
            "@keyframes move2"+
            "{"+
            "0% {transform:translateX(195px);z-index:4;}"+`50% {background-image:url(${imgList[imgStatus == 0? imgList.length - 1: imgStatus - 1]});transform: scale(0.6)}`+
            "100%{transform:translateX(-195px)}"+
            "}"+
            "@keyframes move3"+
            "{"+
            "0% {transform:translateX(-390px);z-index:99}"+
            "100%{transform:translateX(-195px) scale(1.1);}"+
            "}";
            carousel1.style.zIndex = "5";
            carousel3.style.zIndex = "99";
            carousel2.style.zIndex = "5";
            bodyimgDrop.style.backgroundImage = carousel3.style.backgroundImage;
            carousel2.style.backgroundImage = `url(${imgList[imgStatus == 0? imgList.length - 1: imgStatus - 1]})`;
            carousel1.style.transform = "translateX(390px)";
            carousel3.style.transform = "translateX(-195px) scale(1.1)";
            carousel2.style.transform = "translateX(-190px)";
            for (let i = 0; i < noChangeImgList.length ; i++){
                if (carousel3.style.backgroundImage == `url("${noChangeImgList[i]}")`){
                    carouselBt[i].style = "background-color:rgba(255, 255, 255, 1)";
                    if ( i == noChangeImgList.length - 1){
                        carouselBt[0].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }else{
                        carouselBt[i+1].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }
                }
            }
            return imgStatus;
        }else if(carousel2.style.transform.indexOf("scale(1.1)") != -1){
            carousel1.style.animation = "move1 0.5s";
            carousel2.style.animation = "move2 0.5s";
            carousel3.style.animation = "move3 0.5s";
            // let lastImg = imgList.pop();
            // imgList.unshift(lastImg);
            // let lastType = typeList.pop();
            // typeList.unshift(lastType);
            if (imgStatus == 0){
                imgStatus = imgList.length - 1;
            }else{
                imgStatus = imgStatus - 1;
            }
            carousellog[2].style.backgroundColor = typeList[imgStatus == 0? imgList.length - 1: imgStatus - 1].split(",")[1];
            carousellog[2].innerHTML = typeList[imgStatus == 0? imgList.length - 1 : imgStatus - 1].split(",")[0];
            setTimeout(function(){carousel1.style.animation ="";carousel2.style.animation ="";carousel3.style.animation ="";},500);
            Transform.innerHTML = "@keyframes move1"+
            "{"+
            "0% {transform:translateX(0px);z-index:99;}"+
            "100%{transform:translateX(195px) scale(1.1);}"+
            "}"+
            "@keyframes move2"+
            "{"+
            "0% {transform:translateX(0px);z-index:5;}"+
            "100%{transform:translateX(195px)}"+
            "}"+
            "@keyframes move3"+
            "{"+
            "0% {transform:translateX(0px);z-index:4}"+`50% {background-image:url(${imgList[imgStatus == 0? imgList.length - 1: imgStatus - 1]});transform: scale(0.6)}`+
            "100%{transform:translateX(-390px)}"+
            "}";
            carousel2.style.zIndex = "5";
            carousel1.style.zIndex = "99";
            carousel3.style.zIndex = "5";
            bodyimgDrop.style.backgroundImage = carousel1.style.backgroundImage;
            carousel3.style.backgroundImage = `url(${imgList[imgStatus == 0? imgList.length - 1: imgStatus - 1]})`;
            carousel2.style.transform = "translateX(195px)";
            carousel1.style.transform = "translateX(195px) scale(1.1)";
            carousel3.style.transform = "translateX(-390px)";
            for (let i = 0; i < noChangeImgList.length ; i++){
                if (carousel1.style.backgroundImage == `url("${noChangeImgList[i]}")`){
                    carouselBt[i].style = "background-color:rgba(255, 255, 255, 1)";
                    if ( i == noChangeImgList.length - 1){
                        carouselBt[0].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }else{
                        carouselBt[i+1].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }
                }
            }
            return imgStatus;
        }else if(carousel3.style.transform.indexOf("scale(1.1)") != -1){
            carousel1.style.animation = "move1 0.5s";
            carousel2.style.animation = "move2 0.5s";
            carousel3.style.animation = "move3 0.5s";
            // let lastImg = imgList.pop();
            // imgList.unshift(lastImg);
            // let lastType = typeList.pop();
            // typeList.unshift(lastType);
            if (imgStatus == 0 ){
                imgStatus = imgList.length - 1;
            }else{
                imgStatus = imgStatus - 1;
            }
            carousellog[0].style.backgroundColor = typeList[imgStatus == 0? imgList.length - 1: imgStatus - 1].split(",")[1];
            carousellog[0].innerHTML = typeList[imgStatus == 0? imgList.length - 1: imgStatus - 1].split(",")[0];
            setTimeout(function(){carousel1.style.animation ="";carousel2.style.animation ="";carousel3.style.animation ="";},500);
            Transform.innerHTML = "@keyframes move1"+
            "{"+
            "0% {transform:translateX(390px);z-index:4;}"+`50% {background-image:url(${imgList[imgStatus == 0? imgList.length - 1: imgStatus - 1]});transform: scale(0.6)}`+
            "100%{transform:translateX(0px);}"+
            "}"+
            "@keyframes move2"+
            "{"+
            "0% {transform:translateX(-195px);z-index:99;}"+
            "100%{transform:translateX(0px) scale(1.1)}"+
            "}"+
            "@keyframes move3"+
            "{"+
            "0% {transform:translateX(-195px);z-index:5}"+
            "100%{transform:translateX(0px)}"+
            "}";
            carousel3.style.zIndex = "5";
            carousel2.style.zIndex = "99";
            carousel1.style.zIndex = "5";
            bodyimgDrop.style.backgroundImage = carousel2.style.backgroundImage;
            carousel1.style.backgroundImage = `url(${imgList[imgStatus == 0? imgList.length - 1: imgStatus - 1]})`;
            carousel3.style.transform = "translateX(0px)";
            carousel2.style.transform = "translateX(0px) scale(1.1)";
            carousel1.style.transform = "translateX(0px)";
            for (let i = 0; i < noChangeImgList.length ; i++){
                if (carousel2.style.backgroundImage == `url("${noChangeImgList[i]}")`){
                    carouselBt[i].style = "background-color:rgba(255, 255, 255, 1)";
                    if ( i == noChangeImgList.length - 1){
                        carouselBt[0].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }else{
                        carouselBt[i+1].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }
                }
            }
            return imgStatus;
        }
    };
    this.Right = function(box1,box2,box3,style, imgList, typeList, noChangeImgList, imgStatus){
        const carousel1 = document.querySelector(box1);
        const carousel2 = document.querySelector(box2);
        const carousel3 = document.querySelector(box3);
        const Transform = document.querySelector(style);
        const carousellog = document.querySelectorAll(".carousellog");
        const bodyimgDrop = document.querySelector(".bodyimgDrop");
        if (carousel1.style.transform.indexOf("scale(1.1)") != -1){
            carousel1.style.animation = "move1 0.5s";
            carousel2.style.animation = "move2 0.5s";
            carousel3.style.animation = "move3 0.5s";
            // let firstImg = imgList.shift();
            // imgList.push(firstImg);
            // let firstType = typeList.shift();
            // typeList.push(firstType);
            if (imgStatus == imgList.length - 1){
                imgStatus = 0;
            }else{
                imgStatus = imgStatus + 1;
            }
            carousellog[2].style.backgroundColor = typeList[imgStatus == imgList.length - 1? 0: imgStatus + 1].split(",")[1];
            carousellog[2].innerHTML = typeList[imgStatus == imgList.length - 1? 0: imgStatus + 1].split(",")[0];
            setTimeout(function(){carousel1.style.animation ="";carousel2.style.animation ="";carousel3.style.animation ="";},500);
            Transform.innerHTML = "@keyframes move1"+
            "{"+
            "0% {transform:translateX(195px);z-index:5;}"+
            "100%{transform:translateX(0px);}"+
            "}"+
            "@keyframes move2"+
            "{"+
            "0% {transform:translateX(195px);z-index:99;}"+
            "100%{transform:translateX(0px) scale(1.1)}"+
            "}"+
            "@keyframes move3"+
            "{"+
            "0% {transform:translateX(-390px);z-index:4}"+`50% {background-image:url(${imgList[imgStatus == imgList.length - 1? 0: imgStatus + 1]});transform: scale(0.6)}`+
            "100%{transform:translateX(0px)}"+
            "}";
            carousel1.style.zIndex = "5";
            carousel2.style.zIndex = "99";
            carousel3.style.zIndex = "5";
            bodyimgDrop.style.backgroundImage = carousel2.style.backgroundImage;
            carousel3.style.backgroundImage = `url(${imgList[imgStatus == imgList.length - 1? 0: imgStatus + 1]})`;
            carousel1.style.transform = "translateX(0px)";
            carousel2.style.transform = "translateX(0px) scale(1.1)";
            carousel3.style.transform = "translateX(0px)";
            for (let i = 0; i < noChangeImgList.length ; i++){
                if (carousel2.style.backgroundImage == `url("${noChangeImgList[i]}")`){
                    carouselBt[i].style = "background-color:rgba(255, 255, 255, 1)";
                    if ( i == 0){
                        carouselBt[noChangeImgList.length - 1].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }else{
                        carouselBt[i - 1].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }
                }
            }
            return imgStatus;
        }else if(carousel2.style.transform.indexOf("scale(1.1)") != -1){
            carousel1.style.animation = "move1 0.5s";
            carousel2.style.animation = "move2 0.5s";
            carousel3.style.animation = "move3 0.5s";
            // let firstImg = imgList.shift();
            // imgList.push(firstImg);
            // let firstType = typeList.shift();
            // typeList.push(firstType);
            if (imgStatus == imgList.length - 1){
                imgStatus = 0;
            }else{
                imgStatus = imgStatus + 1;
            }
            carousellog[0].style.backgroundColor = typeList[imgStatus == imgList.length - 1? 0: imgStatus + 1].split(",")[1];
            carousellog[0].innerHTML = typeList[imgStatus == imgList.length - 1? 0: imgStatus + 1].split(",")[0];
            setTimeout(function(){carousel1.style.animation ="";carousel2.style.animation ="";carousel3.style.animation ="";},500);
            Transform.innerHTML = "@keyframes move1"+
            "{"+
            "0% {transform:translateX(0px);z-index:5;}"+`50% {background-image:url(${imgList[imgStatus == imgList.length - 1? 0: imgStatus + 1]});transform: scale(0.6)}`+
            "100%{transform:translateX(390px);}"+
            "}"+
            "@keyframes move2"+
            "{"+
            "0% {transform:translateX(0px);z-index:4;}"+
            "100%{transform:translateX(-195px)}"+
            "}"+
            "@keyframes move3"+
            "{"+
            "0% {transform:translateX(0px);z-index:99}"+
            "100%{transform:translateX(-195px) scale(1.1)}"+
            "}";
            carousel2.style.zIndex = "5";
            carousel3.style.zIndex = "99";
            carousel1.style.zIndex = "5";
            bodyimgDrop.style.backgroundImage = carousel3.style.backgroundImage;
            carousel1.style.backgroundImage = `url(${imgList[imgStatus == imgList.length - 1? 0: imgStatus + 1]})`;
            carousel2.style.transform = "translateX(-195px)";
            carousel3.style.transform = "translateX(-195px) scale(1.1)";
            carousel1.style.transform = "translateX(390px)";
            for (let i = 0; i < noChangeImgList.length ; i++){
                if (carousel3.style.backgroundImage == `url("${noChangeImgList[i]}")`){
                    carouselBt[i].style = "background-color:rgba(255, 255, 255, 1)";
                    if ( i == 0){
                        carouselBt[noChangeImgList.length - 1].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }else{
                        carouselBt[i - 1].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }
                }
            }
            return imgStatus;
        }else if(carousel3.style.transform.indexOf("scale(1.1)") != -1){
            carousel1.style.animation = "move1 0.5s";
            carousel2.style.animation = "move2 0.5s";
            carousel3.style.animation = "move3 0.5s";
            // let firstImg = imgList.shift();
            // imgList.push(firstImg);
            // let firstType = typeList.shift();
            // typeList.push(firstType);
            if (imgStatus == imgList.length - 1){
                imgStatus = 0;
            }else{
                imgStatus = imgStatus + 1;
            }
            carousellog[1].style.backgroundColor = typeList[imgStatus == imgList.length - 1? 0: imgStatus + 1].split(",")[1];
            carousellog[1].innerHTML = typeList[imgStatus == imgList.length - 1? 0: imgStatus + 1].split(",")[0];
            setTimeout(function(){carousel1.style.animation ="";carousel2.style.animation ="";carousel3.style.animation ="";},500);
            Transform.innerHTML = "@keyframes move1"+
            "{"+
            "0% {transform:translateX(390px);z-index:99;}"+
            "100%{transform:translateX(195px) scale(1.1);}"+
            "}"+
            "@keyframes move2"+
            "{"+
            "0% {transform:translateX(-195px);z-index:4;}"+`50% {background-image:url(${imgList[imgStatus == imgList.length - 1? 0: imgStatus + 1]});transform: scale(0.6)}`+
            "100%{transform:translateX(195px)}"+
            "}"+
            "@keyframes move3"+
            "{"+
            "0% {transform:translateX(-195px);z-index:5}"+
            "100%{transform:translateX(-390px)}"+
            "}";
            carousel3.style.zIndex = "5";
            carousel1.style.zIndex = "99";
            carousel2.style.zIndex = "5";
            bodyimgDrop.style.backgroundImage = carousel1.style.backgroundImage;
            carousel2.style.backgroundImage = `url(${imgList[imgStatus == imgList.length - 1? 0: imgStatus + 1]})`;
            carousel3.style.transform = "translateX(-390px)";
            carousel1.style.transform = "translateX(195px) scale(1.1)";
            carousel2.style.transform = "translateX(195px)";
            for (let i = 0; i < noChangeImgList.length ; i++){
                if (carousel1.style.backgroundImage == `url("${noChangeImgList[i]}")`){
                    carouselBt[i].style = "background-color:rgba(255, 255, 255, 1)";
                    if ( i == 0){
                        carouselBt[noChangeImgList.length - 1].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }else{
                        carouselBt[i - 1].style = "background-color:rgba(255, 255, 255, 0.7)";
                    }
                }
            }
            return imgStatus;
        }
    }
}