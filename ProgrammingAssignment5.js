function setup() {
    var observerCanvas = document.getElementById('observerCanvas');
    var cameraCanvas = document.getElementById('cameraCanvas');
    var observerContext = observerCanvas.getContext('2d');
    var cameraContext = cameraCanvas.getContext('2d');
    // var slider1 = document.getElementById('slider1');
    // slider1.value = 0;
    var slider2 = document.getElementById('slider2');
    slider2.value = 0;

    var context = cameraContext; // default to drawing in the camera window

    function draw() {
        // clear both canvas instances
        observerCanvas.width = observerCanvas.width;
        cameraCanvas.width = cameraCanvas.width;
        
        // use the sliders to get the angles
        var viewAngle = slider2.value*0.02*Math.PI;
        
        function moveToTx(loc,Tx)
        {var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.moveTo(res[0],res[1]);}

        function lineToTx(loc,Tx)
        {var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.lineTo(res[0],res[1]);}
        
        
        function drawCamera(color,TxU,scale) {
            var Tx = mat4.clone(TxU);
            mat4.scale(Tx,Tx,[scale,scale,scale]);
            context.beginPath();
            context.strokeStyle = color;
            // Twelve edges of a cropped pyramid
            moveToTx([-3,-3,-2],Tx);lineToTx([3,-3,-2],Tx);
            lineToTx([3,3,-2],Tx);lineToTx([-3,3,-2],Tx);
            moveToTx([3,-3,-2],Tx);lineToTx([2,-2,0],Tx);
            lineToTx([2,2,0],Tx);lineToTx([3,3,-2],Tx);
            moveToTx([2,-2,0],Tx);lineToTx([-2,-2,0],Tx);
            lineToTx([-2,2,0],Tx);lineToTx([2,2,0],Tx);
            moveToTx([-2,-2,0],Tx);lineToTx([-3,-3,-2],Tx);
            lineToTx([-3,3,-2],Tx);lineToTx([-2,2,0],Tx);
            context.stroke();
        }
        
        function draw3DAxes(color,TxU,scale) {
            var Tx = mat4.clone(TxU);
            mat4.scale(Tx,Tx,[scale,scale,scale]);

            context.strokeStyle=color;
            context.beginPath();
            // Axes
            moveToTx([1.2,0,0],Tx);lineToTx([0,0,0],Tx);lineToTx([0,1.2,0],Tx);
            moveToTx([0,0,0],Tx);lineToTx([0,0,1.2],Tx);
            // Arrowheads
            moveToTx([1.1,.05,0],Tx);lineToTx([1.2,0,0],Tx);lineToTx([1.1,-.05,0],Tx);
            moveToTx([.05,1.1,0],Tx);lineToTx([0,1.2,0],Tx);lineToTx([-.05,1.1,0],Tx);
            moveToTx([.05,0,1.1],Tx);lineToTx([0,0,1.2],Tx);lineToTx([-.05,0,1.1],Tx);
            // X-label
            moveToTx([1.3,-.05,0],Tx);lineToTx([1.4,.05,0],Tx);
            moveToTx([1.3,.05,0],Tx);lineToTx([1.4,-.05,0],Tx);
            // Y-label
            moveToTx([-.05,1.4,0],Tx);lineToTx([0,1.35,0],Tx);lineToTx([.05,1.4,0],Tx);
            moveToTx([0,1.35,0],Tx);lineToTx([0,1.28,0],Tx);
            // Z-label
            moveToTx([-.05,0,1.3],Tx);
            lineToTx([.05,0,1.3],Tx);
            lineToTx([-.05,0,1.4],Tx);
            lineToTx([.05,0,1.4],Tx);

            context.stroke();
        }

        function drawUVWAxes(color,TxU,scale) {
            var Tx = mat4.clone(TxU);
            mat4.scale(Tx,Tx,[scale,scale,scale]);

            context.strokeStyle=color;
            context.beginPath();
            // Axes
            moveToTx([1.2,0,0],Tx);lineToTx([0,0,0],Tx);lineToTx([0,1.2,0],Tx);
            moveToTx([0,0,0],Tx);lineToTx([0,0,1.2],Tx);
            // Arrowheads
            moveToTx([1.1,.05,0],Tx);lineToTx([1.2,0,0],Tx);lineToTx([1.1,-.05,0],Tx);
            moveToTx([.05,1.1,0],Tx);lineToTx([0,1.2,0],Tx);lineToTx([-.05,1.1,0],Tx);
            moveToTx([.05,0,1.1],Tx);lineToTx([0,0,1.2],Tx);lineToTx([-.05,0,1.1],Tx);
            // U-label
            moveToTx([1.3,.05,0],Tx);lineToTx([1.3,-.035,0],Tx);lineToTx([1.35,-.05,0],Tx);
            lineToTx([1.4,-.035,0],Tx);lineToTx([1.4,.05,0],Tx);
            // V-label
            moveToTx([-.05,1.4,0],Tx);lineToTx([0,1.3,0],Tx);lineToTx([.05,1.4,0],Tx);
            // W-label
            moveToTx([-.1,0,1.3],Tx);lineToTx([-.05,0,1.4],Tx);lineToTx([-0,0,1.3],Tx);
            lineToTx([.05,0,1.4],Tx);lineToTx([.1,0,1.3],Tx);

            context.stroke();
        }

        function draw2DAxes(color,Tx) {
            context.strokeStyle=color;
            context.beginPath();
            // Axes
            moveToTx([120,0,0],Tx);lineToTx([0,0,0],Tx);lineToTx([0,120,0],Tx);
            // Arrowheads
            moveToTx([110,5,0],Tx);lineToTx([120,0,0],Tx);lineToTx([110,-5,0],Tx);
            moveToTx([5,110,0],Tx);lineToTx([0,120,0],Tx);lineToTx([-5,110,0],Tx);
            // X-label
            moveToTx([130,0,0],Tx);lineToTx([140,10,0],Tx);
            moveToTx([130,10,0],Tx);lineToTx([140,0,0],Tx);
            // Y-label
            moveToTx([0,128,0],Tx);lineToTx([5,133,0],Tx);lineToTx([10,128,0],Tx);
            moveToTx([5,133,0],Tx);lineToTx([5,140,0],Tx);
            context.stroke();
        }


        var p0=[0,0,0];
        var p1=[100,0,0];
        var p2=[100,100,0];
        var p3=[0,100,0];
        var p4=[0,100,100];
        var p5=[100,100,100];
        var p6=[100,0,100];
        var p7=[0,0,100];
        
        function draw_cubic(Tx){
            context.beginPath();
            context.strokeStyle = "black";
            context.lineWidth = 5;
            moveToTx(p0,Tx);
            lineToTx(p7,Tx);
            lineToTx(p4,Tx);
            lineToTx(p3,Tx);
            lineToTx(p0,Tx);
            context.closePath();
            context.fillStyle = "pink";
            context.fill();
            context.stroke();
            //------------------
            moveToTx(p0,Tx);
            lineToTx(p7,Tx);
            lineToTx(p6,Tx);
            lineToTx(p1,Tx);
            lineToTx(p0,Tx);
            context.closePath();
            context.fillStyle = "green";
            context.fill();
            context.stroke();
            //---------------------
            moveToTx(p0,Tx);
            lineToTx(p1,Tx);
            lineToTx(p2,Tx);
            lineToTx(p3,Tx);
            lineToTx(p0,Tx);
            context.closePath();
            context.fillStyle = "brown";
            context.fill();
            context.stroke();
            //---------------------
            moveToTx(p5,Tx);
            lineToTx(p2,Tx);
            lineToTx(p1,Tx);
            lineToTx(p6,Tx);
            lineToTx(p5,Tx);
            context.closePath();
            context.fillStyle = "blue";
            context.fill();
            context.stroke();
            //--------------------- 
            moveToTx(p3,Tx);
            lineToTx(p4,Tx);
            lineToTx(p5,Tx);
            lineToTx(p2,Tx);
            lineToTx(p3,Tx);
            context.closePath();
            context.fillStyle = "purple";
            context.fill();
            context.stroke();
            //---------------------
            moveToTx(p4,Tx);
            lineToTx(p7,Tx);
            lineToTx(p6,Tx);
            lineToTx(p5,Tx);
            lineToTx(p4,Tx);
            context.closePath();
            context.fillStyle = "yellow";
            context.fill();
            context.stroke();
            //---------------------
        }

        var CameraCurve = function(viewAngle) {
            var distance = 200.0;
            var eye = vec3.create();
            eye[0] = distance*Math.sin(viewAngle);
            eye[1] = 200;
            eye[2] = distance*Math.cos(viewAngle);  
            return [eye[0],eye[1],eye[2]];
        }
        
        // create two lookAt transforms; one for the camera
        // and one for the "external observer"

        // Create Camera (lookAt) transform
        var eyeCamera = CameraCurve(viewAngle);
        var targetCamera = vec3.fromValues(0,0,0); // Aim at the origin of the world coords
        var upCamera = vec3.fromValues(0,100,0); // Y-axis of world coords to be vertical
        var TlookAtCamera = mat4.create();
        mat4.lookAt(TlookAtCamera, eyeCamera, targetCamera, upCamera);
        
        // Create Camera (lookAt) transform
        var eyeObserver = vec3.fromValues(500,300,500);
        var targetObserver = vec3.fromValues(0,50,0); // Observer still looks at origin
        var upObserver = vec3.fromValues(0,1,0); // Y-axis of world coords to be vertical
        var TlookAtObserver = mat4.create();
        mat4.lookAt(TlookAtObserver, eyeObserver, targetObserver, upObserver);
        
        // Create ViewPort transform (assumed the same for both canvas instances)
        var Tviewport = mat4.create();
        mat4.fromTranslation(Tviewport,[200,200,0]);  // Move the center of the
                                                    // "lookAt" transform (where
                                                    // the camera points) to the
                                                    // canvas coordinates (200,300)
        mat4.scale(Tviewport,Tviewport,[100,-100,100]); // Flip the Y-axis,
                                                    // scale everything by 100x
        // make sure you understand these    

        context = cameraContext;

        // Create Camera projection transform
        // (orthographic for now)
        var TprojectionCamera = mat4.create();
        mat4.ortho(TprojectionCamera,-100,100,-100,100,-1,1);

        // Create Observer projection transform
        // (orthographic for now)
        var TprojectionObserver = mat4.create();
        mat4.ortho(TprojectionObserver,-120,120,-120,120,-1,1);
        
        // Create transform t_VP_PROJ_CAM that incorporates
        // Viewport, projection and camera transforms
        var tVP_PROJ_VIEW_Camera = mat4.create();
        mat4.multiply(tVP_PROJ_VIEW_Camera,Tviewport,TprojectionCamera);
        mat4.multiply(tVP_PROJ_VIEW_Camera,tVP_PROJ_VIEW_Camera,TlookAtCamera);
        var tVP_PROJ_VIEW_Observer = mat4.create();
        mat4.multiply(tVP_PROJ_VIEW_Observer,Tviewport,TprojectionObserver);
        mat4.multiply(tVP_PROJ_VIEW_Observer,tVP_PROJ_VIEW_Observer,TlookAtObserver);
        
        // Create model(ing) transform
        // (from moving object to world)
        var Tmodel = mat4.create();

        // Create transform t_VP_PROJ_VIEW_MOD that incorporates
        // Viewport, projection, camera, and modeling transform
        var tVP_PROJ_VIEW_MOD_Camera = mat4.create();
        mat4.multiply(tVP_PROJ_VIEW_MOD_Camera, tVP_PROJ_VIEW_Camera, Tmodel);
        var tVP_PROJ_VIEW_MOD1_Observer = mat4.create();
        mat4.multiply(tVP_PROJ_VIEW_MOD1_Observer, tVP_PROJ_VIEW_Observer, Tmodel);
        var tVP_PROJ_VIEW_MOD2_Observer = mat4.create();
        mat4.translate(tVP_PROJ_VIEW_MOD2_Observer, tVP_PROJ_VIEW_Observer, eyeCamera);
        var TlookFromCamera = mat4.create();
        mat4.invert(TlookFromCamera,TlookAtCamera);
        mat4.multiply(tVP_PROJ_VIEW_MOD2_Observer, tVP_PROJ_VIEW_MOD2_Observer, TlookFromCamera);

        // Draw the following in the Camera window
        context = cameraContext;
        draw2DAxes("black", mat4.create());
        draw3DAxes("grey",tVP_PROJ_VIEW_Camera,100.0);
        draw_cubic(tVP_PROJ_VIEW_Camera);
        
        // Draw the following in the Observer window
        context = observerContext;
        draw3DAxes("grey",tVP_PROJ_VIEW_Observer,100.0);      
        drawCamera("purple",tVP_PROJ_VIEW_MOD2_Observer,10.0); 
        drawUVWAxes("purple",tVP_PROJ_VIEW_MOD2_Observer,100.0);
        draw_cubic(tVP_PROJ_VIEW_Observer);
          
    }
    
  
    slider2.addEventListener("input",draw);
    draw();
}
window.onload = setup;
