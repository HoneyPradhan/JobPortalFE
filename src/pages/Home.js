// import React,{useEffect, useState}from 'react'
// import Navbar from '../component/Navbar'
// import Header from '../component/Header'
// import {Box, Container, Stack,useTheme,Card,Typography} from '@mui/material'
// import { useDispatch, useSelector }from 'react-redux'
// import { jobLoadAction } from '../redux/actions/jobAction'
// import { useParams } from 'react-router-dom'
// import CardElement from '../component/cardElement'
// const Home =()=>{

//     const {jobs }=useSelector(state=>state.loadJobs)
//     // const { jobs, setUniqueLocation, pages, loading } = useSelector(state => state.loadJobs);


//     const {palette}=useTheme()
//     const dispatch = useDispatch()
//     const{keyword,location}=useParams()

//     const[page,setPage]=useState(1)
//     const [cat,setCat]=React.useState('')

//     useEffect(()=>{

//         dispatch(jobLoadAction(page,keyword,cat,location))
//     },[dispatch,page,keyword,cat,location])

    
//     return (
//         <>
//         <Box sx={{backgroundColor:"#fafafa",minHeight:"100vh"}}>
//         <Navbar/>
//         <Header/>
//         <Container>
//         <Stack
//         direction={{ xs: 'column', sm: 'row' }}
//         spacing={{ xs: 1, sm: 2, md: 4 }}
//         >
//         <Box sx={{flex:2,p:2}}>
//         <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
//                                 <Box sx={{ pb: 2 }}>
//                                     <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
//                                         Filter job by category
//                                     </Typography>
//                                 </Box>


//          </Card>





//             </Box>   
//             <Box sx={{flex:5,p:2}}>

//                 {
//                    jobs && jobs.map((job,i)=>(
//                      <CardElement

//                      key={i}
//                      id={job._id}
//                      jobTitle={job.title}
//                      description={job.description}
//                      category={job.jobType?job.jobType.jobTypeName:"No category"}
//                      location={job.location}
                     
                     
                     
//                      />

//                    )) 
//                 }

//             </Box>  

//         </Stack>
//         </Container>

//         </Box>
       
//         <h1>Home Page</h1>

//         </>
//     )
// }
// export default Home

import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import { Box, Card, Container, ListItemIcon, MenuItem, MenuList, Pagination, Stack, Typography, useTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { jobLoadAction } from '../redux/actions/jobAction'
import { Link, useParams } from 'react-router-dom'
import Footer from '../component/Footer'
import LoadingBox from '../component/LoadingBox'
import SelectComponent from '../component/SelectComponent'
import { jobTypeLoadAction } from '../redux/actions/jobTypeAction'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardElements from '../component/CardElements'





const Home = () => {
    const { jobs,setUniqueLocation, pages, loading } = useSelector(state => state.loadJobs);

    const { palette } = useTheme();
    const dispatch = useDispatch();
    const { keyword, location } = useParams();

    const [page, setPage] = useState(1);
    const [cat, setCat] = React.useState('');

    useEffect(() => {
        console.log(jobs)
        dispatch(jobLoadAction(page, keyword, cat, location));

    }, [dispatch,page,keyword,cat,location]);


    
    useEffect(() => {
        dispatch(jobTypeLoadAction());
    }, [dispatch]);

    const handleChangeCategory = (e) => {
        setCat(e.target.value);
    }
   

    return (
        <>
            <Box sx={{ bgcolor:palette.primary.white, minHeight: "100vh" }}>

                <Navbar />
                <Header />
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <Box sx={{ flex: 2, p: 2 }}>
                            {/* <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                        Filter job by category
                                    </Typography>
                                </Box>
                                <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />


                            </Card> */}
                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
    <Box sx={{ pb: 2 }}>
        <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
            Filter job by category
        </Typography>
    </Box>
    {/* Wrap SelectComponent with Link */}
    <Link to={`/search/category/${cat}`}>
        <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat} />
    </Link>
</Card>

                            {/* jobs by location */}
                            <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                                <Box sx={{ pb: 2 }}>
                                    {/* <h4>Filter by category</h4> */}
                                    <Typography component="h4" sx={{ color: palette.primary.main, fontWeight: 600 }}>
                                        Filter job by location
                                    </Typography>
                                    <MenuList>
                                        {
                                            setUniqueLocation && setUniqueLocation.map((location, i) => (
                                                <MenuItem key={i}>
                                                    <ListItemIcon>
                                                        <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
                                                    </ListItemIcon>
                                                    <Link style={{color:palette.text.secondary}}to={`/search/location/${location}`}>{location}</Link>
                                                </MenuItem>

                                            ))
                                        }

                                    </MenuList>

                                </Box>
                            </Card>
                        </Box>




                        


                        <Box sx={{ flex: 5, p: 2 }}>
                            {
                                loading ?
                                    <LoadingBox /> :
                                    jobs && jobs.length === 0 ?
                                        <>
                                            <Box
                                                sx={{
                                                    minHeight: '350px',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>

                                                <h2>No result found!</h2>
                                            </Box>
                                        </> :

                                        
                                        jobs && jobs.map((job, i) => (
                                            <CardElements
                                                key={i}
                                                id={job._id}
                                                jobTitle={job.title}
                                                description={job.description}
                                                category={job.jobType ? job.jobType.jobTypeName : "No category"}
                                                location={job.location}
                                                jobType={job.jobType}
                                            />
                                       ))




                                    
                                    
                            }
                            <Stack spacing={2} >
                                <Pagination page={page} count={pages === 0 ? 1 : pages} onChange={(event, value) => setPage(value)} />
                            </Stack>



                        </Box>





                        

                    </Stack>
                </Container>
            </Box>
            <Footer />

        </>
    )
}

export default Home