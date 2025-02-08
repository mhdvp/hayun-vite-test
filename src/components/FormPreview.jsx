import { Form } from "hayun";
import { createRef, useEffect, useRef } from "react";

function FormPreview(data) {
    const form = useRef();
    const formRef = createRef(null);
    // const navigate = useNavigate();
  
    useEffect(() => {
      // Check for exist form if exist dont create a new one! and prevent duplicate
      if (!form.current) {
        form.current = new Form({ container: formRef.current });
        form.current.draw();
        // form.current.audiograms.addEventListener("click", () => navigate("/#1"));
      }
      // if blank form exist then update data for it. 
      if (form.current) {
  
        
          const formData1 = {
          common: {
            audiometer: "",
            tympanometers: "",
  
          },
          header: {
            officeName:"",
            officeLogo: "",
            dateValue: "۱۴۰۳/۵/۱۸", //be gotten from now Date
            numForm: "۱۳"
          },
          patient: {
  
            name: "مهدی",
            lastName: "جاویدی",
            gender: "مرد",
            age: "۴۷",
            referrer: "دکتر عارف نامور",
            history: "سرگیجه ناگهانی همراه با احساس پری در گوش راست",
  
          },
          audiogram: {R:{R_AC:{250: 10}}},
          speech: {},
          tympanogram: "",
          reflex: "",
          report: {
            report: "",
          },
          footer: {
            address: "",
            tel: "",
  
          }
        };
        
          form.current.update(formData1);
        
        // form1.addEvent(); //did not work!
  
      }
  
    }, [formRef]);
  
  
    // useEffect(() => {
    //   // Add event listener
  
    //   // Cleanup function to remove the event listener
    //   return () => {
    //     window.removeEventListener("click", () => navigate("/#1"));
    //   };
    // }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
  
  
  
    return (
      <>
        <div ref={formRef}></div>
      </>
    );
  
}

export default FormPreview;