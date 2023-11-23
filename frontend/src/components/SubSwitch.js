import React,{useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  

function SubSwitch() {
  const [data, setData] = useState(undefined);
  const [subhss, setSubhss] = useState([]);
  const [submath, setSubmath] = useState([]);
  const [subphy, setSubphy] = useState([]);
  const [subcs, setSubcs] = useState([]);
  const [subec, setSubec] = useState([]);
  const [dissubhss, setdisSubhss] = useState([]);
  const [dissubmath, setdisSubmath] = useState([]);
  const [dissubphy, setdisSubphy] = useState([]);
  const [dissubcs, setdisSubcs] = useState([]);
  const [dissubec, setdisSubec] = useState([]);

  const onOptionChangeHandler = (event) => {

    setData(event.target.value);
    setInfo({...info, [event.target.name]: event.target.value});

    console.log(
        "User Selected Value - ",
        event.target.value
    );
};

useEffect(() => {
  axios.post(`http://localhost:5000/getsub/get`, { Subject: "hss", Sem:localStorage.getItem('Sem') })
    .then((response) => {
      console.log(response.data);
      
      const { info, disinfo } = response.data;
      setSubhss(info);
      setdisSubhss(disinfo);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  axios.post(`http://localhost:5000/getsub/get`, { Subject: "math", Sem:localStorage.getItem('Sem') })
    .then((response) => {
      console.log(response.data);
      const { info, disinfo } = response.data;
      setSubmath(info);
      setdisSubmath(disinfo);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  axios.post(`http://localhost:5000/getsub/get`, { Subject: "PHY", Sem:localStorage.getItem('Sem') })
    .then((response) => {
      console.log(response.data);
      const { info, disinfo } = response.data;
      setSubphy(info);
      setdisSubphy(disinfo);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  axios.post(`http://localhost:5000/getsub/get`, { Subject: "CS", Sem:localStorage.getItem('Sem') })
    .then((response) => {
      console.log(response.data);
      const { info, disinfo } = response.data;
      setSubcs(info);
      setdisSubcs(disinfo);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  axios.post(`http://localhost:5000/getsub/get`, { Subject: "EC", Sem:localStorage.getItem('Sem') })
    .then((response) => {
      console.log(response.data);
      setSubec(response.data);
      const { info, disinfo } = response.data;
      setSubec(info);
      setdisSubec(disinfo);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);

useEffect(() => {
  console.log("sub in use effect", subhss);
  console.log("sub in use effect", dissubhss);
}, [subhss,dissubhss]); 

  let history = useNavigate();
  const [info,setInfo] = useState({
    Sid: "",
    Name: "",
    Sem: "",
    SUB1: "",
    SUB2: "",
    SUB3: "",
    SUB4: "",
    SUB5: "",
  });
  const [pastsub,setPsub] = useState({
    SUB1: localStorage.getItem('SUB1'),
    SUB2: localStorage.getItem('SUB2'),
    SUB3: localStorage.getItem('SUB3'),
    SUB4: localStorage.getItem('SUB4'),
    SUB5: localStorage.getItem('SUB5'),
  });
  

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/studentInfo/switch", {info,pastsub}).then((response) => {
    });
    history("/subpro");
  };
  function Options({ options }) {
    console.log(options); // Log the options array to the console
    return ( <>
      <option selected value="" disabled>Select an option</option>
      {options.map(option => (
        <option key={option.SubCode} value={option.SubCode}>
          {option.SubCode}
        </option>
      ))}
    </>);
  }
  function Optionsdis({ options }) {
    console.log(options); // Log the options array to the console
    return ( <>
      {options.map(option => (
        <option key={option.SubCode} value={option.SubCode}  disabled>
          {option.SubCode}
        </option>
      ))}
    </>);
  }
  
const onChange = (e)=>{
  setInfo({...info, [e.target.name]: e.target.value});

}
return (
    
  <div className="container">
    
  <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
  <label htmlFor="validationCustom08" className="form-label">Student Id</label>
  <input type="number" name="Sid" className="form-control" onChange={onChange} id="validationCustom08" required/>
  <div className="valid-feedback">
    Looks good!
  </div>
</div>
<div className="col-md-4">
  <label htmlFor="validationCustom07" className="form-label">Name</label>
  <input type="text" name="Name" className="form-control" onChange={onChange} id="validationCustom07"  required/>
  <div className="valid-feedback">
    Looks good!
  </div>
</div>

<div className="col-md-6">
  <label htmlFor="validationCustom06" className="form-label">Semister</label>
  <input type="number" name="Sem" className="form-control" onChange={onChange} id="validationCustom06" required/>
  <div className="invalid-feedback">
    Please provide Sem
  </div>
</div>
<div className="col-md-3">
  <label htmlFor="validationCustom01" className="form-label">Math Subject</label>
  <select
  value={info.SUB1}
  id="validationCustom01"
onChange={onOptionChangeHandler} 
name="SUB1"
className="form-control form-select" >
<Options options={submath} />
<Optionsdis options={dissubmath} />
</select>
  <div className="invalid-feedback">
    Please select a Subject
  </div>
</div>
<div className="col-md-3">
  <label htmlFor="validationCustom02" className="form-label">Hss Subject</label>
  <select
  value={info.SUB2}
  id="validationCustom02"
onChange={onOptionChangeHandler}
name="SUB2"
className="form-control form-select" >
<Options options={subhss} />
<Optionsdis options={dissubhss} />
</select>
  <div className="invalid-feedback">
    Please select a Subject
  </div>
</div>
<div className="col-md-3">
  <label htmlFor="validationCustom03" className="form-label">Computer Subject</label>
  <select
  value={info.SUB3}
  id="validationCustom03"
onChange={onOptionChangeHandler}
name="SUB3"
className="form-control form-select" >
<Options options={subcs} />
<Optionsdis options={dissubcs} />
</select>
  <div className="invalid-feedback">
    Please select a Subject
  </div>
</div>
<div className="col-md-3">
  <label htmlFor="validationCustom04" className="form-label">Electrical Subject</label>
  <select
  value={info.SUB4}
  id="validationCustom04"
onChange={onOptionChangeHandler}
name="SUB4"
className="form-control form-select" >
<Options options={subec} />
<Optionsdis options={dissubec} />
</select>
  <div className="invalid-feedback">
    Please select a Subject
  </div>
</div>
<div className="col-md-3">
  <label htmlFor="validationCustom05" className="form-label">Physics Subject</label>
  <select
  value={info.SUB5}
  id="validationCustom05"
onChange={onOptionChangeHandler}
name="SUB5"
className="form-control form-select" >
<Options options={subphy} />
<Optionsdis options={dissubphy} />
</select>
  <div className="invalid-feedback">
    Please select a Subject
  </div>
</div>


<div className="col-12">
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
    <label className="form-check-label" htmlFor="invalidCheck">
    Switching confirmed...
    </label>
    <div className="invalid-feedback">
      You must agree before Switching.
    </div>
  </div>
</div>
<div className="col-12">
  <button className="btn btn-primary" onClick={onSubmit} type="submit">Submit form</button>
</div>
</form>
  </div>
);
}

export default SubSwitch
