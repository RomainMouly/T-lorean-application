// import React, { useState } from 'react';
// import axios from 'axios';
// import '../../assets/css/form.css';

// const Form = () => {
//   const [form, setForm] = useState({ lastname: '', firstname: '', email: '' });
//   const [validForm, setValidForm] = useState('');
//   const [errorForm, setErrorForm] = useState('');

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleValidForm = () => {
//     setValidForm(
//       `Félicitation ${form.firstname}, votre réservation a bien été prise en compte. Préparez-vous pour l'aventure !`
//     );
//   };

//   const handleErrorForm = (e) => {
//     setErrorForm(
//       `Erreur lors de votre réservation : ${e.message}, veuillez réessayer`
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post('https://api-airbnb-node.herokuapp.com/api/users', form)
//       .then((res) => res.data)
//       .then((data) => {
//         handleValidForm();
//       })
//       .catch(() => {
//         handleErrorForm(e);
//       });

//     setForm({ ...form, lastname: '', firstname: '', email: '' });
//   };

//   return (
//     <div className="form">
//       <h1>Réserver votre voyage</h1>

//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <legend>Vos Informations</legend>
//           <div className="form-data">
//             <label htmlFor="lastname">Nom</label>
//             <input
//               type="text"
//               id="lastname"
//               name="lastname"
//               onChange={handleChange}
//               value={form.lastname}
//               required
//             />
//           </div>

//           <div className="form-data">
//             <label htmlFor="firstname">Prénom</label>
//             <input
//               type="text"
//               id="firstname"
//               name="firstname"
//               onChange={handleChange}
//               value={form.firstname}
//               required
//             />
//           </div>

//           <div className="form-data">
//             <label htmlFor="email">E-mail</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               onChange={handleChange}
//               value={form.email}
//               required
//             />
//           </div>
//           <div className="form-data">
//             <button type="button" className="colorButton form-button">
//               Réserver
//             </button>
//           </div>
//           <p>
//             {validForm}
//             {errorForm}
//           </p>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default Form;
