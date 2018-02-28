myApp.controller('adminCtrl', function($scope, $http) {
    
    

    $scope.adminInit = function() {
    	//console.log("INIT function");
        //$scope.selectCategory = 'mobile';
        $scope.category = ['mobile', 'laptop', 'speaker', 'headphone', 'tv'];
        $scope.laptop = true;
        $scope.speaker = true;
        $scope.headphone = true;
        $scope.tv = true;
        $scope.formData = {
            'category': '',
            'name': '',
            'brand': '',
            'price': 0,
            'screen': 0,
            'processor': '',
            'os': '',
            'battery': '',
            'camera': '',
            'ram': '',
            'rom': '',
            'warrenty': '',
            'color': '',
            'desc': '',
            'resolution': '',
            'power': '',
            'speakersCount': '',
            'outPower': '',
            'cableLength': 0,
            'compatibleDevice': ''
        };
    }

    $scope.formDisplay = function() {
        console.log("in switch of selector");
        switch ($scope.selectCategory) {
            case 'mobile':
                $scope.adminInit();
                 $scope.mobile = false;
                break;
            case 'laptop':

               $scope.adminInit();
                $scope.mobile = true;
                $scope.laptop = false;
                break;
            case 'speaker':

                $scope.adminInit();
                $scope.mobile = true;
                $scope.speaker = false;
                break;
            case 'headphone':

                $scope.adminInit();
                $scope.mobile = true;
                $scope.headphone = false;
                break;

            case 'tv':

               $scope.adminInit();
                $scope.tv = false;
                $scope.mobile = true;
                break;
        }
    }

    $scope.addMobile = function() {
     console.log('in addMobile() of adminCtrl');
        sendData = {
        name: $scope.formData.name,
        brand: $scope.formData.brand,
        //image: Buffer,
        price: $scope.formData.price,
        screen: $scope.formData.screen,
        processor: $scope.formData.processor,
        os: $scope.formData.os,
        battery: $scope.formData.battery,
        camera: $scope.formData.camera,
        ram: $scope.formData.ram,
        rom: $scope.formData.rom,
        warrenty: $scope.formData.warrenty,
        color: $scope.formData.color,
        desc: $scope.formData.desc
    } ;


        console.log(sendData);

                 $http({
                  method : "POST",
                    url : "http://localhost:5000/admin",
                   data : sendData
            }).then(function mySuccess(response) {
             console.log("good");
            }, function myError(response) {
                console.log(response);
            // $scope.myWelcome = response.statusText;
            });
    }
    $scope.addLaptop = function() {

    }
    $scope.addSpeaker = function() {

    }
    $scope.addHeadphone = function() {

    }
    $scope.addTv = function() {

    }
    
})