import React from "react";
import './starField.css';

const shadowArray = [
    "-1307px -169px",
    "1273px -399px",
    "-853px -248px",
    "542px -333px",
    "964px 162px",
    "610px -305px",
    "-638px 465px",
    "-966px -180px",
    "-202px 110px",
    "25px -52px",
    "264px 62px",
    "109px 468px",
    "186px 220px",
    "1494px 24px",
    "657px -456px",
    "804px -127px",
    "-432px 48px",
    "-473px -101px",
    "473px 288px",
    "607px -425px",
    "-515px 307px",
    "475px 444px",
    "-973px 467px",
    "1317px 2px",
    "697px -195px",
    "-456px 141px",
    "-232px -371px",
    "773px 444px",
    "-5px 441px",
    "-1171px -364px",
    "-110px -444px",
    "851px 360px",
    "-284px 125px",
    "-1018px 375px",
    "921px -193px",
    "-66px -257px",
    "-1149px -300px",
    "477px 348px",
    "145px 440px",
    "-898px 265px",
    "1311px 22px",
    "1427px -87px",
    "492px 96px",
    "-789px 167px",
    "-1340px 46px",
    "-421px -299px",
    "986px -150px",
    "267px -240px",
    "-236px -405px",
    "-660px -209px",
    "629px 9px",
    "445px -20px",
    "724px -41px",
    "356px 182px",
    "308px -208px",
    "-126px 274px",
    "1087px -450px",
    "-290px -302px",
    "168px -146px",
    "-212px -332px",
    "1399px -200px",
    "597px 452px",
    "-1336px -404px",
    "-747px -49px",
    "901px -389px",
    "-1438px -310px",
    "-1057px 382px",
    "1390px 271px",
    "-554px -170px",
    "-702px 23px",
    "897px 423px",
    "-605px 4px",
    "302px -95px",
    "-1315px -393px",
    "-1014px -425px",
    "-1231px 308px",
    "956px -19px",
    "-185px 412px",
    "996px -117px",
    "512px 429px",
    "615px -266px",
    "1200px -322px",
    "-662px 427px",
    "288px 82px",
    "-482px -308px",
    "-597px 324px",
    "-207px 342px",
    "-697px -245px",
    "1357px -87px",
    "-696px 267px",
    "1208px 157px",
    "-923px -33px",
    "473px 38px",
    "1224px 462px",
    "1358px -108px",
    "587px -210px",
    "1014px -113px",
    "-456px 179px",
    "-1414px -44px",
    "-297px 404px",
    "725px 480px",
    "716px -29px",
    "-382px -345px",
    "836px 272px",
    "-522px -201px",
    "-308px 215px",
    "-1242px 314px",
    "468px 52px",
    "70px 386px",
    "-1031px 89px",
    "765px -159px",
    "340px -232px",
    "347px 223px",
    "1448px 210px",
    "-931px 380px",
    "692px -237px",
    "396px 307px",
    "-731px 178px",
    "-462px 257px",
    "430px -324px",
    "-397px 269px",
    "1478px -369px",
    "-500px -180px",
    "895px 22px",
    "1427px 302px",
    "278px -27px",
    "765px -396px",
    "-1308px 313px",
    "276px -285px",
    "-897px 56px",
    "445px -219px",
    "-55px 332px",
    "-549px 435px",
    "195px 210px",
    "114px 383px",
    "635px -81px",
    "-1276px 63px",
    "-166px 159px",
    "-1498px 84px",
    "-557px 299px",
    "30px -436px",
    "263px -27px",
    "-341px -250px",
    "836px 342px",
    "-1131px -310px",
    "-158px -473px",
    "1263px -429px",
    "-1343px -4px",
    "-1035px -257px",
    "-377px 242px",
    "780px 353px",
    "115px -292px",
    "-1082px 186px",
    "590px -291px",
    "1114px 192px",
    "1279px -198px",
    "-989px -132px",
    "1383px -207px",
    "-1133px -436px",
    "372px 138px",
    "247px -411px",
    "-1473px 318px",
    "506px -104px",
    "-1435px -404px",
    "814px -50px",
    "364px -392px",
    "-155px -203px",
    "-881px -235px",
    "-930px -91px",
    "394px 364px",
    "1405px 198px",
    "533px 69px",
    "667px 19px",
    "1124px -318px",
    "-1474px 142px",
    "556px -450px",
    "82px 224px",
    "-824px -67px",
    "156px -416px",
    "-1428px 16px",
    "1448px 435px",
    "1075px 137px",
    "507px -467px",
    "398px -34px",
    "-680px -478px",
    "-106px -342px",
    "1135px 307px",
    "-544px 410px",
    "-858px -23px",
    "652px 400px",
    "-1022px -52px",
    "301px -450px",
    "1041px -218px",
    "164px -443px",
    "-582px -433px",
    "-41px 14px",
    "-1189px 441px",
    "968px 409px",
    "1086px -213px",
    "-1299px -376px",
    "-641px 249px",
    "914px -431px",
    "386px -119px",
    "-398px -364px",
    "564px -113px",
    "-480px 335px",
    "922px 174px",
    "-1068px -326px",
    "-490px 191px",
    "97px -217px",
    "-66px -165px",
    "1151px 380px",
    "679px -306px",
    "641px -215px",
    "678px 2px",
    "-1071px -289px",
    "610px 18px",
    "606px 366px",
    "415px 459px",
    "-35px -92px",
    "40px 456px",
    "185px 144px",
    "-179px -136px",
    "-376px -388px",
    "1276px 371px",
    "-48px 223px",
    "-1415px 310px",
    "-400px -293px",
    "169px -390px",
    "-250px -475px",
    "-304px 69px",
    "-1376px -164px",
    "813px -84px",
    "-759px -180px",
    "825px -23px",
    "1423px 353px",
    "643px -438px",
    "1210px 23px",
    "192px 380px",
    "318px -175px",
    "806px 288px",
    "-1042px 415px",
    "-1216px -469px",
    "-1322px -376px",
    "-1033px -58px",
    "-369px -410px",
    "-1399px 57px",
    "1333px -67px",
    "-429px -264px",
    "214px 344px",
    "575px 180px",
    "-694px -443px",
    "-732px 255px",
    "-406px 334px",
    "-561px -147px",
    "-685px -383px",
    "535px -26px",
    "-732px -125px",
    "1150px 160px",
    "609px 294px",
    "-1188px -327px",
    "1470px 456px",
    "729px 441px",
    "1455px -100px",
    "534px 80px",
    "1397px -28px",
    "756px -179px",
    "1113px -194px",
    "-66px 375px",
    "696px 371px",
    "-995px -85px",
    "427px -65px",
    "-286px -342px",
    "-1054px -306px",
    "1126px -351px",
    "-461px 104px",
    "-654px -26px",
    "-1398px 43px",
    "-726px -256px",
    "813px -340px",
    "-1389px -183px",
    "-1321px -395px",
    "-483px 138px",
    "824px -8px",
    "-1297px 74px",
    "-651px -174px",
    "564px 18px",
    "466px 447px",
    "770px -58px",
    "-1105px -23px",
    "-963px 111px",
    "-1053px 377px",
    "-1419px -206px",
    "185px -286px",
    "-569px 381px",
    "191px -247px",
    "-1353px -411px",
    "1163px 286px",
    "982px -97px",
    "429px -375px",
    "1491px -214px",
    "-312px -300px",
    "-138px 360px",
    "857px -471px",
    "813px 278px",
    "176px -357px",
    "-673px -314px",
    "-923px -470px",
    "675px 87px",
    "-175px 390px",
    "969px -462px",
    "-1380px -85px",
    "29px 208px",
    "1490px -161px",
    "-833px 186px",
    "225px 217px",
    "-1384px 371px",
    "649px 353px",
    "-914px -112px",
    "-969px 246px",
    "578px 56px",
    "347px -386px",
    "484px -214px",
    "-535px -106px",
    "1043px -52px",
    "-96px 389px",
    "745px -411px",
    "618px 186px",
    "1472px 347px",
    "292px -407px",
    "586px 368px",
    "-221px -293px",
    "-78px 147px",
    "-164px 191px",
    "565px 326px",
    "-387px -47px",
    "34px 318px",
    "-1055px 161px",
    "-152px -421px",
    "455px -390px",
    "-972px -375px",
    "1150px -336px",
    "-1261px -439px",
    "486px -287px",
    "-1021px 155px",
    "-1443px 311px",
    "-1437px 421px",
    "890px 402px",
    "411px 33px",
    "-126px -412px",
    "-339px 374px",
]

const StarField = ({ fixed, colors, duration = 3000 }) => {
    const setStars = (colorsArray) => {
        if (colorsArray && colorsArray.length > 0) {
            return shadowArray.reduce((previousValue, currentValue, i) => previousValue + currentValue + " " + colorsArray[i % colorsArray.length] + (i === shadowArray.length - 1 ? "" : ", "), ``)
        } else {
            return ""
        }
    }
    return (
        <div style={{ position: fixed ? "fixed" : "absolute" }} className="starContainer">
            <div
                className="stars"
                style={{
                    animationDuration: `${duration}ms`,
                    boxShadow: colors ? setStars(colors) : `
            -1307px -169px #c9c9c9,
            1273px -399px #e0e0e0, 
            -853px -248px #c7c7c7, 
            542px -333px #fafafa, 
            964px 162px #d9d9d9, 
            610px -305px #c2c2c2, 
            -638px 465px #f2f2f2, 
            -966px -180px #c4c4c4, 
            -202px 110px #d1d1d1, 
            25px -52px #dedede, 
            264px 62px #fcfcfc, 
            109px 468px #f0f0f0, 
            186px 220px #f7f7f7, 
            1494px 24px #c4c4c4, 
            657px -456px #dbdbdb, 
            804px -127px #c7c7c7, 
            -432px 48px #ebebeb, 
            -473px -101px #fff, 
            473px 288px #e8e8e8, 
            607px -425px #fafafa, 
            -515px 307px #c7c7c7, 
            475px 444px #c4c4c4, 
            -973px 467px #d4d4d4, 
            1317px 2px #dbdbdb, 
            697px -195px #f7f7f7, 
            -456px 141px #dbdbdb, 
            -232px -371px #e0e0e0, 
            773px 444px #c2c2c2, 
            -5px 441px #c7c7c7, 
            -1171px -364px #d1d1d1, 
            -110px -444px #e6e6e6, 
            851px 360px #d6d6d6, 
            -284px 125px #f0f0f0, 
            -1018px 375px #f7f7f7, 
            921px -193px #ccc, 
            -66px -257px #dedede, 
            -1149px -300px #f5f5f5, 
            477px 348px #e6e6e6, 
            145px 440px #dedede, 
            -898px 265px #fafafa, 
            1311px 22px #e8e8e8, 
            1427px -87px #fff, 
            492px 96px #e3e3e3, 
            -789px 167px #ccc, 
            -1340px 46px #e3e3e3, 
            -421px -299px #d6d6d6, 
            986px -150px #ebebeb, 
            267px -240px #fafafa, 
            -236px -405px #e6e6e6, 
            -660px -209px #c7c7c7, 
            629px 9px #c7c7c7, 
            445px -20px #fff, 
            724px -41px #c9c9c9, 
            356px 182px #dbdbdb, 
            308px -208px #f0f0f0, 
            -126px 274px #c2c2c2, 
            1087px -450px #e3e3e3, 
            -290px -302px #f5f5f5, 
            168px -146px #f7f7f7, 
            -212px -332px #f0f0f0, 
            1399px -200px #ebebeb, 
            597px 452px #fafafa, 
            -1336px -404px #e3e3e3, 
            -747px -49px #d6d6d6, 
            901px -389px #e8e8e8, 
            -1438px -310px #f0f0f0, 
            -1057px 382px #f0f0f0, 
            1390px 271px #e0e0e0, 
            -554px -170px #ccc, 
            -702px 23px #c4c4c4, 
            897px 423px #f5f5f5, 
            -605px 4px #f7f7f7, 
            302px -95px #f7f7f7, 
            -1315px -393px #f7f7f7, 
            -1014px -425px #d4d4d4, 
            -1231px 308px #f2f2f2, 
            956px -19px #f7f7f7, 
            -185px 412px #cfcfcf, 
            996px -117px #f0f0f0, 
            512px 429px #ebebeb, 
            615px -266px #e3e3e3, 
            1200px -322px #c7c7c7, 
            -662px 427px #f0f0f0, 
            288px 82px #d4d4d4,
             -482px -308px #f5f5f5,
             -597px 324px #dedede,
             -207px 342px #cfcfcf,
             -697px -245px #fff,
             1357px -87px #f0f0f0,
             -696px 267px #c4c4c4,
             1208px 157px #ededed,
             -923px -33px #c9c9c9,
             473px 38px #e6e6e6,
             1224px 462px #dbdbdb,
             1358px -108px #d1d1d1,
             587px -210px #f7f7f7,
             1014px -113px #ccc,
             -456px 179px #fff,
             -1414px -44px #fff,
             -297px 404px #c7c7c7,
             725px 480px #f0f0f0,
             716px -29px #f0f0f0,
             -382px -345px #fcfcfc,
             836px 272px #c4c4c4,
             -522px -201px #c2c2c2,
             -308px 215px #e8e8e8,
             -1242px 314px #f2f2f2,
             468px 52px #ededed,
             70px 386px #c9c9c9,
             -1031px 89px #fff,
             765px -159px #fafafa,
             340px -232px #e0e0e0,
             347px 223px #ebebeb,
             1448px 210px #f2f2f2,
             -931px 380px #cfcfcf,
              692px -237px #d4d4d4,
              396px 307px #f5f5f5,
              -731px 178px #e0e0e0,
              -462px 257px #cfcfcf,
              430px -324px #dedede,
              -397px 269px #c7c7c7,
              1478px -369px #c7c7c7,
              -500px -180px #f2f2f2,
              895px 22px #e6e6e6,
              1427px 302px #d6d6d6,
               278px -27px #f7f7f7,
               765px -396px #e0e0e0,
               -1308px 313px #d6d6d6,
               276px -285px #d4d4d4,
               -897px 56px #d1d1d1,
               445px -219px #d4d4d4,
               -55px 332px #fcfcfc,
               -549px 435px #c9c9c9,
               195px 210px #c2c2c2,
               114px 383px #c4c4c4,
               635px -81px #dedede,
               -1276px 63px #d9d9d9,
               -166px 159px #fff,
               -1498px 84px #c4c4c4,
               -557px 299px #ccc,
               30px -436px #f7f7f7,
               263px -27px #cfcfcf,
               -341px -250px #dbdbdb,
               836px 342px #fcfcfc,
               -1131px -310px #ededed,
               -158px -473px #c4c4c4,
               1263px -429px #c9c9c9,
               -1343px -4px #fafafa,
               -1035px -257px #d4d4d4,
               -377px 242px #dbdbdb,
               780px 353px #fafafa,
               115px -292px #e0e0e0,
                -1082px 186px #c9c9c9,
                590px -291px #ebebeb,
                1114px 192px #dedede,
                1279px -198px #e8e8e8,
                -989px -132px #dedede,
                1383px -207px #c4c4c4,
                -1133px -436px #e6e6e6,
                372px 138px #f0f0f0,
                247px -411px #f5f5f5,
                -1473px 318px #f2f2f2,
                506px -104px #fcfcfc,
                -1435px -404px #f2f2f2,
                814px -50px #e8e8e8,
                364px -392px #c4c4c4,
                -155px -203px #f5f5f5,
                -881px -235px #cfcfcf,
                -930px -91px #e0e0e0,
                394px 364px #c9c9c9,
                1405px 198px #fafafa,
                533px 69px #c7c7c7,
                667px 19px #dbdbdb,
                1124px -318px #d1d1d1,
                -1474px 142px #dedede,
                556px -450px #fcfcfc,
                82px 224px #c9c9c9,
                -824px -67px #fcfcfc,
                156px -416px #f5f5f5,
                -1428px 16px #f2f2f2,
                1448px 435px #e8e8e8,
                1075px 137px #c9c9c9,
                507px -467px #d6d6d6,
                398px -34px #d9d9d9,
                -680px -478px #f2f2f2,
                -106px -342px #ebebeb,
                1135px 307px #fcfcfc,
                -544px 410px #c2c2c2,
                -858px -23px #cfcfcf,
                652px 400px #c7c7c7,
                -1022px -52px #ccc,
                301px -450px #ededed,
                1041px -218px #cfcfcf,
                164px -443px #e8e8e8,
                -582px -433px #f5f5f5,
                -41px 14px #e8e8e8,
                -1189px 441px #cfcfcf,
                968px 409px #dbdbdb,
                1086px -213px #cfcfcf,
                 -1299px -376px #d1d1d1,
                 -641px 249px #c7c7c7,
                 914px -431px #f2f2f2,
                 386px -119px #fff,
                 -398px -364px #dedede,
                 564px -113px #f7f7f7,
                 -480px 335px #f0f0f0,
                 922px 174px #ebebeb,
                 -1068px -326px #dedede,
                 -490px 191px #e6e6e6,
                 97px -217px #d9d9d9,
                 -66px -165px #e8e8e8,
                 1151px 380px #ccc,
                 679px -306px #e8e8e8,
                 641px -215px #e6e6e6,
                 678px 2px #cfcfcf,
                 -1071px -289px #e6e6e6,
                 610px 18px #f0f0f0,
                 606px 366px #d4d4d4,
                 415px 459px #d9d9d9,
                 -35px -92px #cfcfcf,
                 40px 456px #dbdbdb,
                 185px 144px #fafafa,
                 -179px -136px #c9c9c9,
                 -376px -388px #d4d4d4,
                 1276px 371px #dbdbdb,
                 -48px 223px #f0f0f0,
                 -1415px 310px #fafafa,
                 -400px -293px #ccc,
                 169px -390px #d4d4d4,
                 -250px -475px #c2c2c2,
                 -304px 69px #c9c9c9,
                 -1376px -164px #f0f0f0,
                 813px -84px #c2c2c2,
                 -759px -180px #fff,
                 825px -23px #dedede,
                 1423px 353px #cfcfcf,
                 643px -438px #d9d9d9,
                 1210px 23px #dbdbdb,
                 192px 380px #c4c4c4,
                 318px -175px #d1d1d1,
                 806px 288px #f0f0f0,
                 -1042px 415px #e6e6e6,
                 -1216px -469px #f2f2f2,
                 -1322px -376px #d9d9d9,
                  -1033px -58px #e0e0e0,
                  -369px -410px #c7c7c7,
                  -1399px 57px #d1d1d1,
                  1333px -67px #e3e3e3,
                  -429px -264px #f7f7f7,
                  214px 344px #d9d9d9,
                  575px 180px #dedede,
                  -694px -443px #d9d9d9,
                  -732px 255px #ededed,
                  -406px 334px #e8e8e8,
                  -561px -147px #e0e0e0,
                  -685px -383px #fafafa,
                  535px -26px #d1d1d1,
                  -732px -125px #fcfcfc,
                  1150px 160px #ededed,
                  609px 294px #f2f2f2,
                  -1188px -327px #d9d9d9,
                  1470px 456px #d9d9d9,
                  729px 441px #fcfcfc,
                  1455px -100px #d1d1d1,
                  534px 80px #ededed,
                  1397px -28px #fafafa,
                  756px -179px #d1d1d1,
                  1113px -194px #e0e0e0,
                  -66px 375px #e3e3e3,
                  696px 371px #c2c2c2,
                  -995px -85px #fafafa,
                  427px -65px #dedede,
                  -286px -342px #fafafa,
                  -1054px -306px #c4c4c4,
                  1126px -351px #c9c9c9,
                  -461px 104px #ebebeb,
                  -654px -26px #c7c7c7,
                  -1398px 43px #fff,
                  -726px -256px #fafafa,
                  813px -340px #e3e3e3,
                  -1389px -183px #fff,
                  -1321px -395px #f2f2f2,
                  -483px 138px #dedede,
                  824px -8px #fcfcfc,
                  -1297px 74px #dedede,
                  -651px -174px #d6d6d6,
                  564px 18px #ccc,
                  466px 447px #cfcfcf,
                  770px -58px #ebebeb,
                  -1105px -23px #ccc,
                  -963px 111px #d6d6d6,
                  -1053px 377px #cfcfcf,
                  -1419px -206px #fff,
                  185px -286px #e0e0e0,
                  -569px 381px #ccc,
                  191px -247px #fff,
                  -1353px -411px #ccc,
                  1163px 286px #f0f0f0,
                  982px -97px #f0f0f0,
                  429px -375px #e6e6e6,
                  1491px -214px #e0e0e0,
                  -312px -300px #d4d4d4,
                  -138px 360px #c7c7c7,
                  857px -471px #fafafa,
                  813px 278px #f7f7f7,
                  176px -357px #e3e3e3,
                  -673px -314px #c9c9c9,
                  -923px -470px #dedede,
                  675px 87px #d6d6d6,
                  -175px 390px #d6d6d6,
                  969px -462px #e8e8e8,
                  -1380px -85px #ccc,
                  29px 208px #d4d4d4,
                  1490px -161px #f0f0f0,
                  -833px 186px #fafafa,
                  225px 217px #c2c2c2,
                  -1384px 371px #e3e3e3,
                  649px 353px #ccc,
                  -914px -112px #ebebeb,
                  -969px 246px #f0f0f0,
                  578px 56px #c9c9c9,
                  347px -386px #f2f2f2,
                  484px -214px #c2c2c2,
                  -535px -106px #e3e3e3,
                  1043px -52px #e0e0e0,
                  -96px 389px #e3e3e3,
                  745px -411px #fcfcfc,
                  618px 186px #ccc,
                  1472px 347px #fcfcfc,
                  292px -407px #f0f0f0,
                  586px 368px #e8e8e8,
                  -221px -293px #c2c2c2,
                  -78px 147px #c9c9c9,
                  -164px 191px #fcfcfc,
                  565px 326px #e0e0e0,
                  -387px -47px #c7c7c7,
                  34px 318px #d9d9d9,
                  -1055px 161px #ebebeb,
                  -152px -421px #fafafa,
                  455px -390px #d1d1d1,
                  -972px -375px #f7f7f7,
                  1150px -336px #dbdbdb,
                  -1261px -439px #d6d6d6,
                  486px -287px #f5f5f5,
                  -1021px 155px #d9d9d9,
                  -1443px 311px #c2c2c2,
                  -1437px 421px #fff,
                  890px 402px #fff,
                  411px 33px #f5f5f5,
                  -126px -412px #ededed,
                  -339px 374px #f7f7f7
            `}}
            ></div>
        </div>
    );
};
export default StarField;