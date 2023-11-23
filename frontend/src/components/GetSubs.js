import React,{useEffect,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  

function GetSubs() {
  const [data, setData] = useState(undefined);
  const [subhss, setSubhss] = useState([]);
  const [submath, setSubmath] = useState([]);
  const [subphy, setSubphy] = useState([]);
  const [subcs, setSubcs] = useState([]);
  const [subec, setSubec] = useState([]);

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
      setSubhss(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  axios.post(`http://localhost:5000/getsub/get`, { Subject: "math", Sem:localStorage.getItem('Sem') })
    .then((response) => {
      console.log(response.data);
      setSubmath(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  axios.post(`http://localhost:5000/getsub/get`, { Subject: "PHY", Sem:localStorage.getItem('Sem') })
    .then((response) => {
      console.log(response.data);
      setSubphy(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  axios.post(`http://localhost:5000/getsub/get`, { Subject: "CS", Sem:localStorage.getItem('Sem') })
    .then((response) => {
      console.log(response.data);
      setSubcs(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  axios.post(`http://localhost:5000/getsub/get`, { Subject: "EC", Sem:localStorage.getItem('Sem') })
    .then((response) => {
      console.log(response.data);
      setSubec(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);

useEffect(() => {
  console.log("sub in use effect", subhss);
}, [subhss]); // Add 'sub' to the dependency array to log its updated value

// The rest of your component logic

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
  

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/studentInfo/update", info).then((response) => {
    });
    history("/subpro");
  };
  function Options({ options }) {
    console.log(options); // Log the options array to the console
    return (
      options.map(option => (
        <option key={option.SubCode} value={option.SubCode}>{option.SubCode}
        </option>
      ))
    );
  }
  
const onChange = (e)=>{
  setInfo({...info, [e.target.name]: e.target.value});

}

  return (
    
    <div className="container">
      
    <form className="row g-3 needs-validation" noValidate>
    <div className="col-md-4">
    <label htmlFor="validationCustom08" className="form-label">Student Id</label>
    <input type="number" name="Sid" className="form-control" onChange={onChange} id="validationCustom06" required/>
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
    <input type="number" name="Sem" className="form-control" onChange={onChange} id="validationCustom08" required/>
    <div className="invalid-feedback">
      Please provide Sem
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom01" className="form-label">Math Subject</label>
    <select
    value={data}
    id="validationCustom01"
  onChange={onOptionChangeHandler} 
  name="SUB1"
  className="form-control form-select" required>
  <Options options={submath} />
</select>
    <div className="invalid-feedback">
      Please select a Subject
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom02" className="form-label">Hss Subject</label>
    <select
    value={data}
    id="validationCustom02"
  onChange={onOptionChangeHandler}
  name="SUB2"
  className="form-control form-select" required>
  <Options options={subhss} />
</select>
    <div className="invalid-feedback">
      Please select a Subject
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom03" className="form-label">Computer Subject</label>
    <select
    value={data}
    id="validationCustom03"
  onChange={onOptionChangeHandler}
  name="SUB3"
  className="form-control form-select" required>
  <Options options={subcs} />
</select>
    <div className="invalid-feedback">
      Please select a Subject
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label">Electrical Subject</label>
    <select
    value={data}
    id="validationCustom04"
  onChange={onOptionChangeHandler}
  name="SUB4"
  className="form-control form-select" required>
  <Options options={subec} />
</select>
    <div className="invalid-feedback">
      Please select a Subject
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">Physics Subject</label>
    <select
    value={data}
    id="validationCustom05"
  onChange={onOptionChangeHandler}
  name="SUB5"
  className="form-control form-select" required>
  <Options options={subphy} />
</select>
    <div className="invalid-feedback">
      Please select a Subject
    </div>
  </div>
  
  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" htmlFor="invalidCheck">
        Freeze
      </label>
      <div className="invalid-feedback">
        You must agree before Freezing.
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

export default GetSubs