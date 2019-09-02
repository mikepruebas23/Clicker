var buttton1 = document.getElementById("mcdinero");
var TOAST={
    toast:null,
    _id:0,
    time:null,
    init:function(data={}){
        // Create TOAST
        this.toast = document.createElement("div");
        this.toast.id = "__TOAST";

        this.decoration = data.color || "#8393c0";
        this.background = data.color || "#EA2027";
        this.color = data.color || "white";
        this.time = data.time || 4000;

        Object.assign(this.toast.style, {
            position:"absolute",
            top:"0",
            right:"0",
            width:"300px",
            height:"100%",
            zIndex:"99999",
            pointerEvents:"none",
            borderRadius: "5px",
            padding: "10px",
            paddingLeft: "30px",
            paddingBottom:"17px",
            overflow:"hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
            
        })
        var body = document.querySelector("body");
        
        body.insertBefore(this.toast,body.firstChild);
        // css
        var style = document.createElement("style");
        style.innerHTML=`
            .toastIn{
                opacity:1 !important;
                transform:scale(1) !important;
            }
            .toastOut{
                transform:scale(0.6) !important;
                opacity:0 !important;
            }
        `;
        document.querySelector("head").appendChild(style);
    },
    close:function(el){   
        el.classList.add("toastOut");
        setTimeout(function(){
            el.remove();
            buttton1.style.display = 'block';
        },250);
    },
    add:function(text,time){
        if(!time) time=this.time;
        var self=this;
        var toast = document.createElement("div");
        Object.assign(toast.style,{
            width:"87%",
            padding:"10px",
            // minHeight: "50px",
            backgroundColor:this.background,
            color:"white",
            borderRadius:"5px",
            boxShadow:"0 1px 19px 0px rgba(0, 0, 0, 0.45)",
            paddingRight:"50px",
            position:"relative",
            marginBottom:"13px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            color:this.color,
            transition:"all 250ms ease",
            opacity:"0",
            transform:"scale(0.7)",
            fontFamily: "sans-serif"
        })
        toast.innerHTML=`
            <p style="margin:0;">${text}</p>
            <div onclick="TOAST.close(this.parentNode);" style="
                position:absolute;
                right:0;
                top:0;
                width:50px;
                height:100%;
                padding-top:10px;
                padding-bottom:10px;
                pointer-events: all;
                cursor: pointer;
            ">
                <div style="
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:100%;
                    height:100%;
                    border-left-style: solid;
                    border-width: 1px;
                    font-family: monospace;
                    font-size: 1.5em;
                    
                   
                ">
                    X
                </div>
            </div>
        `;
        this.toast.appendChild(toast);
        setTimeout(function(){
            self.close(toast);
        },time)
        return toast;
    }
}
function toast(a,t){
    var t = TOAST.add(a,t);
    setTimeout(function(){
        t.classList.add("toastIn");
        buttton1.style.display = 'none';
    },50)
}
TOAST.init();

function ggcrack(){
    toast('Dinero Insuficiente', 3000);
}

