import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';


			let camera, controls;
			let renderer,video,skydome;
            let poolSceneVideo,vector,selfieScene,VideoRoomScene, BottleRoomScene,videoRoomArrow,BottleRoomArrow,MainRoomScene,MainRoomArrow,PoolRoomArrow,PoolRoomScene,CoachRoomScene,CoachRoomArrow;
			let scene,text,cubeColor,materials,skyBox,opacityValue,transparentBool,ProductRoomScene,ProductRoomArrow;
            let textScene,RoomVideoPlay,RoomVideoPlayScene,filterScene,clickableVideoMesh,SceneObjectVideo1,videoPlane,runVideo,selfieRoomArrow;
            let arrowUrl ="UIAssets/arrow_white.png";
            const mouse = new THREE.Vector2();
            const startButton = document.getElementById( 'start-btn' );
            startButton.addEventListener( 'click', function () {
                init();
                animate();
                renderer.autoclear = false;
                runVideo = false;
                // scene.add(videoScene)
                // clickableVideo = false
            document.getElementById('overlay').style.display = 'none';
            setTimeout(function(){
                    MainRoomScene.add(MainRoomArrow);
                    clickableVideo = true

            }, 1000);

            } );
            var clickableVideo = false

			function init() {

				const container = document.getElementById( 'container' );

				renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
                renderer.autoclear = false

				scene = new THREE.Scene();
				CoachRoomScene = new THREE.Scene()
                selfieScene = new THREE.Scene()
				PoolRoomScene = new THREE.Scene()
                MainRoomScene = new THREE.Scene()
                ProductRoomScene = new THREE.Scene()
                VideoRoomScene = new THREE.Scene()
                BottleRoomScene = new THREE.Scene()
                SceneObjectVideo1 = new THREE.Scene()
                RoomVideoPlayScene = new THREE.Scene();
                textScene = new THREE.Scene();
                filterScene = new THREE.Scene();
                scene.add(MainRoomScene)
				scene.add(CoachRoomScene)
                scene.add(VideoRoomScene)
                scene.add(BottleRoomScene)
                scene.add(selfieScene)
				scene.add(PoolRoomScene)
                scene.add(RoomVideoPlayScene)
                scene.add(textScene)
                scene.add(ProductRoomScene)
                scene.add(filterScene)
                scene.add(SceneObjectVideo1)

                camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 3000 );

                skydome = {
                    scene: new THREE.Scene(),
                    camera : new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 3000 ),
                };
                camera.rotation.z = 0


				skydome.camera.position.z =0.01;


        controls = new OrbitControls( skydome.camera, renderer.domElement );

        // controls.target.set(0, 0, 0);
        // controls.rotateSpeed = - 0.25;
        // controls.enableZoom = false;
				// controls.enablePan = false;
				// controls.enableDamping = true;
				controls.rotateSpeed = - 0.25;
        controls.update();
                //***********************CUBE MAP********************
				envLoad("scenes/360Scene1.png")

												console.log(controls);


                //***********************LIGHT********************
                const color = 0xFFFFFF;
                const intensity = 1;
                const light = new THREE.DirectionalLight(color, intensity);
                light.position.set(-1, 2, 4);
                scene.add(light);

                //***********************ARROWS********************
                var spriteTexture1 = new THREE.TextureLoader().load( arrowUrl );
				var spriteMat1 = new THREE.SpriteMaterial( { map: spriteTexture1 ,rotation:0,transparent: true,opacity:1} );
				CoachRoomArrow = new THREE.Sprite( spriteMat1 );
				CoachRoomArrow.position.set(-18,-8,25);
				CoachRoomArrow.scale.set(9,6,6)


				var spriteTexture2 = new THREE.TextureLoader().load( arrowUrl );
				var spriteMat2 = new THREE.SpriteMaterial( { map: spriteTexture2,rotation: -0.1 } );
				PoolRoomArrow = new THREE.Sprite( spriteMat2 );
				PoolRoomArrow.position.set(9,-4,4);
				PoolRoomArrow.scale.set(4,2,2)


                var spriteTexture3 = new THREE.TextureLoader().load(arrowUrl);
				var spriteMat3 = new THREE.SpriteMaterial( { map: spriteTexture3,rotation: -0.1 } );
				MainRoomArrow = new THREE.Sprite( spriteMat3 );
				MainRoomArrow.position.set(0,-12,-22);
				MainRoomArrow.scale.set(10,10,10)


                var spriteTexture4 = new THREE.TextureLoader().load(arrowUrl );
				var spriteMat4 = new THREE.SpriteMaterial( { map: spriteTexture4,rotation: -0.1 } );
				ProductRoomArrow = new THREE.Sprite( spriteMat4 );
				ProductRoomArrow.position.set(-5,-7,-10);
				ProductRoomArrow.scale.set(6,3,3)

                var spriteTexture5 = new THREE.TextureLoader().load(arrowUrl );
				var spriteMat5 = new THREE.SpriteMaterial( { map: spriteTexture5,rotation: -0.1 } );
				selfieRoomArrow = new THREE.Sprite( spriteMat5 );
				selfieRoomArrow.position.set(12,-7,-18);
				selfieRoomArrow.scale.set(6,3,3)

                var spriteTexture6 = new THREE.TextureLoader().load(arrowUrl );
				var spriteMat6 = new THREE.SpriteMaterial( { map: spriteTexture6,rotation: 0.1 } );
				videoRoomArrow = new THREE.Sprite( spriteMat6 );
				videoRoomArrow.position.set(-5,-7,-20);
				videoRoomArrow.scale.set(6,3,3)


                var spriteTexture7 = new THREE.TextureLoader().load( arrowUrl );
				var spriteMat7 = new THREE.SpriteMaterial( { map: spriteTexture7,rotation: -0.1 } );
				BottleRoomArrow = new THREE.Sprite( spriteMat7 );
				BottleRoomArrow.position.set(8,-7,-20);
				BottleRoomArrow.scale.set(6,3,3)




                //***********************VIDEO********************
                videoPlane = new THREE.PlaneGeometry( 16, 9 );
                video = document.createElement('video');
                video.src = "video/Ahc-Spa- Home-Sensorial-Treatment-Introverts- -Thinke3-1.mp4"; // Set video address


                video.loop = true;
                const videoTexture = new THREE.VideoTexture(video)
                const videoMat = new THREE.MeshBasicMaterial( {map: videoTexture,transparent: true,opacity:1,side: THREE.DoubleSide} );
                RoomVideoPlay = new THREE.Mesh( videoPlane, videoMat );

                // RoomVideoPlay.scale.normalize().multiplyScalar(0.1);
                // RoomVideoPlayScene.add(RoomVideoPlay)



                const colorMesh = new THREE.PlaneGeometry( 36, 24, 1 );

                const materialColor = new THREE.MeshBasicMaterial( {color: 0x000000,transparent:true, opacity: 0} );
                cubeColor = new THREE.Mesh( colorMesh, materialColor );
                cubeColor.position.set(49.9, 1, -10);
                cubeColor.rotation.set(0,-1.5,0)
                // filterScene.add( cubeColor );
                const testTesture = new THREE.TextureLoader().load( "UIAssets/textureTest.jpg" );
                const clickableVideoGeo = new THREE.BoxGeometry( 3, 2, 2 );
                const alphAmapTex = new THREE.TextureLoader().load( "UIAssets/mask.jpg" );
                const clickableVideoMat = new THREE.MeshBasicMaterial( {map:testTesture,alphaMap:alphAmapTex ,transparent:true, opacity: 1} );
                clickableVideoMesh = new THREE.Mesh( clickableVideoGeo, clickableVideoMat );
                clickableVideoMesh.position.set(-2, -1.5, -20);


                //***********************TEXT********************
                const textGeo = new THREE.PlaneGeometry( 36, 36, 36 );
                const textTexture = new THREE.TextureLoader().load( "UIAssets/startExperience.png" );
                const textMat = new THREE.MeshBasicMaterial( {map: textTexture, transparent:true, opacity: 0} );
                text = new THREE.Mesh( textGeo, textMat );
                text.position.set(49.8, 1, -10);
                text.rotation.set(0,-1.5,0)
                textScene.add(text);
				window.addEventListener( 'resize', onWindowResize );
                clickTrigger()
                renderer.autoclear = false;


			}





			function getTexturesFromAtlasFile( atlasImgUrl, tilesNum ) {

				const textures = [];

				for ( let i = 0; i < tilesNum; i ++ ) {

					textures[ i ] = new THREE.Texture();

				}

				new THREE.ImageLoader()
					.load( atlasImgUrl, ( image ) => {

						let canvas, context;
						const tileWidth = image.height;

						for ( let i = 0; i < textures.length; i ++ ) {

							canvas = document.createElement( 'canvas' );
							context = canvas.getContext( '2d' );
							canvas.height = tileWidth;
							canvas.width = tileWidth;
							context.drawImage( image, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth );
							textures[ i ].image = canvas;
							textures[ i ].needsUpdate = true;
						}

					} );

				return textures;

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();


				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {



                //***********************TWEEN********************


                var testBool = false


                // if (  testBool == false){
                //     new TWEEN.Tween( text.material ).to( { opacity: 1 }, 100 ).start();
                //     new TWEEN.Tween( cubeColor.material ).to( { opacity: 0.5 }, 100 ).start();



                //     testBool = true;
                // } if( Math.abs(vector.x) > 0.0000010130538922770067 && Math.abs(vector.x) <0.000006352257762340783){
                //     new TWEEN.Tween( text.material ).to( { opacity: 0 }, 100 ).start();

                //     new TWEEN.Tween( cubeColor.material ).to( { opacity: 0 }, 100 ).start();
                //     testBool = false;
                //   }
                //   if(vector.x > 0 && vector.x < 0.000009522163112851169 && (vector.z > -0.00000999932445997495 && vector.z<0) && vector.z<9 && poolSceneVideo == true){

                //       video.play()

                //   }else if ((vector.x > 0.000009522163112851169|| vector.x <   0)  && poolSceneVideo == true){
                //     video.pause()
                //   }
                  //main Scene
                  //0.000009983227825237407
                  //0.000007191070537904391
                  //0.0000021222522946780884
                  //4.5

                  //pool Scene
                  //-5.312526464765157e-7
                  //0.000009339746910191843

				 // required when damping is enabled
                //



                requestAnimationFrame( animate );
                renderer.autoClear = true;
                controls.update();
                renderer.render(skydome.scene, skydome.camera);

                renderer.autoClear = false;

                renderer.render(scene, camera );
                camera.quaternion.copy( skydome.camera.quaternion );
                runTween()







			}
            function clickTrigger(){
                const raycaster = new THREE.Raycaster();
                document.addEventListener(
                    "click",
                    event => {

                    mouse.x = event.clientX / window.innerWidth * 2 - 1;
                    mouse.y = -(event.clientY / window.innerHeight) * 2 +1 ;

                    raycaster.setFromCamera( mouse, camera );

                    var intersectsPoolRoom = raycaster.intersectObjects( PoolRoomScene.children, false );
                    var intersectsMainRoom = raycaster.intersectObjects( MainRoomScene.children, false );
                    var intersectsCoachRoom = raycaster.intersectObjects( CoachRoomScene.children, false );
                    var intersectsProductRoom = raycaster.intersectObjects( ProductRoomScene.children, false );
                    var intersectsRoomVideoPlay = raycaster.intersectObjects( RoomVideoPlayScene.children, false );
                    var intersectsObjectVideo = raycaster.intersectObjects( SceneObjectVideo1.children, false );
                    var intersectsSelfie = raycaster.intersectObjects( selfieScene.children, false );
                    var intersectsVideoRoom = raycaster.intersectObjects( VideoRoomScene.children, false );
                    var intersectsBottleRoom = raycaster.intersectObjects( BottleRoomScene.children, false );


                    //***********************POOL SCENE**************************
                    if ( intersectsPoolRoom.length > 0 ) {
                        console.log("POOOL SCENE - 1")
                        setTimeout(function(){

                            MainRoomScene.add(MainRoomArrow);
                            selfieScene.add(selfieRoomArrow);

                            MainRoomArrow.position.set(-20,-10,-10);
				            MainRoomArrow.scale.set(8,8,8)

                            RoomVideoPlayScene.add(RoomVideoPlay);
                            RoomVideoPlay.position.set(-190,-40,120)
                            RoomVideoPlay.rotation.set(0,2.7,0)
                            RoomVideoPlay.scale.set(13.2,13,1)
                            video.play()
                            runVideo =true
                            poolSceneVideo = true
                        }, 300);
                        setTimeout(function(){
                            envLoad("scenes/360Scene7.png")
                            skyBox.rotation.y = -2

                        }, 200);
                        setTimeout(function(){

                            controls.reset();
                        }, 250);
                        DisableEverything()


                        clickableVideo = true


                    }
                       //***********************SELFIE SCENE**************************
                       if ( intersectsSelfie.length > 0 ) {
                        console.log("SELFIE SCENE - 1")
                        setTimeout(function(){
                            MainRoomScene.add(MainRoomArrow)
                            PoolRoomScene.add(PoolRoomArrow);
                            PoolRoomArrow.position.set(-5,-4,10);
                            PoolRoomArrow.scale.set(4,2,2)


                        }, 300);
                        setTimeout(function(){
                            envLoad("scenes/360Scene8.png")
                            skyBox.rotation.y = -2.5

                        }, 200);
                        setTimeout(function(){

                            controls.reset();
                        }, 250);
                        DisableEverything()
                        clickableVideo = false
                        // videoMesh.position.set(135, 15, -15);

                    }
                     //***********************COACH SCENE********************Arrow******
                    if ( intersectsCoachRoom.length > 0 ) {
                        console.log("COACH SCENE - 1")
                        setTimeout(function(){

                            ProductRoomScene.add(ProductRoomArrow);
                            MainRoomScene.add(MainRoomArrow);
                            MainRoomArrow.position.set(-20,-10,0);
				            MainRoomArrow.scale.set(6,6,6)
                            ProductRoomArrow.position.set(-5,-7,-10);
                            ProductRoomArrow.scale.set(6,3,3)

                        }, 300);
                        setTimeout(function(){
                            envLoad("scenes/360Scene3.png")
                            skyBox.rotation.y =0

                        }, 200);
                        setTimeout(function(){

                            controls.reset();
                        }, 250);
                        DisableEverything()
                        // scene.remove(videoScene);
                        // scene.remove(filterScene);
                        // scene.remove(textScene);

                        clickableVideo = false
                        runVideo =false

                    //***********************ROOOM SCENE********************Arrow4******
                    } if(intersectsProductRoom.length > 0  ) {
                        console.log("ROOM ENTREANCE SCENE - 1")
                        setTimeout(function(){
                                VideoRoomScene.add(videoRoomArrow)
                                BottleRoomScene.add(BottleRoomArrow)
                                RoomVideoPlayScene.add(RoomVideoPlay)
                                CoachRoomScene.add(CoachRoomArrow)
                                MainRoomScene.add(MainRoomArrow);

                                CoachRoomArrow.position.set(18,-10,2);
				                CoachRoomArrow.scale.set(8,4,4)
                                MainRoomArrow.position.set(-18,-10,0);
				                MainRoomArrow.scale.set(8,4,4);
                                // scene.add(SceneObjectVideo1)
                                // SceneObjectVideo1.add(clickableVideoMesh)
                                clickableVideo = false
                                runVideo =false

                        }, 300);
                        setTimeout(function(){
                            envLoad("scenes/360Scene4.png")
                            skyBox.rotation.y =0

                        }, 200);
                        setTimeout(function(){

                            controls.reset();
                        }, 250);
                        DisableEverything()
                            // new TWEEN.Tween( videoMesh.material ).to( { opacity: 0 }, 100 ).start();
                            // new TWEEN.Tween( cubeColor.material ).to( { opacity: 0 }, 100 ).start();
                            // new TWEEN.Tween( text.material ).to( { opacity: 0 }, 100 ).start();
                            clickableVideo = false


                        }
                    //***********************Video ROOM SCENE**************************
                        if(intersectsVideoRoom.length > 0  ) {
                            console.log("VIDEO ROOM SCENE - 1")
                            setTimeout(function(){

                                ProductRoomScene.add(ProductRoomArrow)
                                ProductRoomArrow.position.set(2,-10,10);
                                ProductRoomArrow.scale.set(8,4,4)

                            }, 300);
                            setTimeout(function(){
                                envLoad("scenes/360Scene5.png")
                                skyBox.rotation.y =0

                            }, 200);
                            setTimeout(function(){

                                controls.reset();
                            }, 250);
                            DisableEverything()
                            }
                          //***********************BOTTLE ROOOM SCENE**************************
                        if(intersectsBottleRoom.length > 0  ) {
                            console.log("BOTTLE ROOM SCENE - 1")
                            setTimeout(function(){

                                ProductRoomScene.add(ProductRoomArrow)
                                ProductRoomArrow.position.set(-5,-7,10);
                                ProductRoomArrow.scale.set(8,4,4);
                                // RoomVideoPlayScene.add(RoomVideoPlay);

                            }, 300);
                            setTimeout(function(){
                                envLoad("scenes/360Scene6.png")
                                skyBox.rotation.y =0

                            }, 200);
                            setTimeout(function(){

                                controls.reset();
                            }, 250);
                                DisableEverything()
                            }



                    //***********************BACK TO MAIN SCENE********************Arrow3******

                    if(intersectsMainRoom.length > 0  ) {
                        console.log("MAIN SCENE - 1")
                    setTimeout(function(){

                            CoachRoomScene.add(CoachRoomArrow)
                            PoolRoomScene.add(PoolRoomArrow);
                            RoomVideoPlayScene.add(RoomVideoPlay);

                            RoomVideoPlay.position.set(94,-7,90)

                            RoomVideoPlay.scale.set(1.8,2.1,1)
                            // RoomVideoPlay.rotation.set(0,90,0)

                            CoachRoomArrow.position.set(-18,-8,25);
                            CoachRoomArrow.scale.set(9,6,6)
                            PoolRoomArrow.position.set(9,-4,4);
                            PoolRoomArrow.scale.set(4,2,2)
                            video.play()

                            runVideo =true
                            poolSceneVideo =false

                    }, 300);

                    setTimeout(function(){
                        envLoad("scenes/360Scene2.png")
                        skyBox.rotation.y = -1.7
                    }, 200);
                    setTimeout(function(){

                        controls.reset();
                    }, 250);
                    DisableEverything()




                    }
                    if(intersectsObjectVideo.length > 0  && clickableVideo == true) {
                        console.log("video clicked")
                        setTimeout(function(){
                            console.log("working")

                            // document.getElementById('video2').style.display = 'block';
                            // document.getElementById('video_id').style.display = 'block';
                            // var player = videojs('#video2');
                            // var video = document.getElementById('video2');
                            // video.requestFullscreen();
                            // player.play();
                    }, 1200);
                    window.open('https://www.thecarrotcollective.com/')
                    // clickableVideoMesh.userData = { URL: "http://stackoverflow.com"};
                    // window.open(intersectsObjectVideo[0].clickableVideoMesh.userData.URL);
                    // document.getElementById('blackScreen').style.display = 'block';
                    }


                    //***********************PLAY VIDEO ON PRODUCT SCENE**************************
                    else if ( intersectsRoomVideoPlay.length > 0 && clickableVideo == true) {
                        setTimeout(function(){
                            document.getElementById('video2').style.display = 'block';
                            document.getElementById('video_id').style.display = 'block';
                            var player = videojs('#video2');
                            var video = document.getElementById('video2');
                            video.requestFullscreen();
                            player.play();
                            player.on('fullscreenchange', function () {
                                if (this.isFullscreen()){
                                    console.log('fullscreen');
                                } else {
                                    document.getElementById('video2').style.display = 'none';
                                    document.getElementById('blackScreen').style.display = 'none';
                                    document.getElementById('video_id').style.display = 'none';
                                    player.pause()
                                }
                            })
                    }, 1500);
                    document.getElementById('blackScreen').style.display = 'block';
                    // controls.enableRotate = false
                    // clickableVideo = false

                      }
                    });
            }

            function envLoad(textureUrl){

                const textures = getTexturesFromAtlasFile( textureUrl, 6 );
				materials = [];
                transparentBool = true
                opacityValue = 0
				for ( let i = 0; i < 6; i ++ ) {

					materials.push( new THREE.MeshBasicMaterial( { map: textures[ i ] ,opacity: 0,
                    transparent: true, depthWrite:false, depthTest :false} ) );


				}

				skyBox = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), materials );
                // skyBox.rotation.y = 30
                console.log(materials[0].transparent)

				skyBox.geometry.scale( 1, 1, -1 );
                for ( let i = 0; i < 6; i ++ ) {

					new TWEEN.Tween(materials[i]).to( { opacity: 1 }, 500 ).start();
                    runTween()


				}
                setTimeout(function(){
                    for ( let i = 0; i < 6; i ++ ) {

                        materials[i].transparent = false


                }

                }, 1000);

				skydome.scene.add( skyBox );
            }


            function runTween() {

                 requestAnimationFrame(runTween)

                TWEEN.update()
                // [...]
            }
            function DisableEverything(){
                clickableVideo = false
                video.pause();

                let ArrowArray = [MainRoomArrow,PoolRoomArrow,selfieRoomArrow,CoachRoomArrow,videoRoomArrow,ProductRoomArrow,BottleRoomArrow,RoomVideoPlay]
                let ArrowScene = [MainRoomScene,PoolRoomScene,selfieScene,CoachRoomScene,VideoRoomScene,ProductRoomScene,BottleRoomScene,RoomVideoPlayScene]
                for (var i = 0; i < ArrowArray.length; i++) {

                    ArrowScene[i].remove(ArrowArray[i]);

                }
            }
