AFRAME.registerComponent("car-model" ,{
    schema: {
        modelRef: {type:"string",default:"../assets/scene.gltf"}
    },
    init: function(){
        this.el.setAttribute("gltf-model", this.data.modelRef)
        const position={x:0 , y:20 , z:20};
        const rotation={x:0 , y:0 , z:0};

        this.el.setAttribute("position" , position)
        this.el.setAttribute("rotation" , rotation)
        this.el.setAttribute("scale" , {x:3,y:1,z:1})

    }
})