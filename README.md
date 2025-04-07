# 사용한 Hook 

1. useParam ( url parameter )
   
   const { id } = useParam();
   console.log(id); 

2. useSearchParams ( queryString )
   
   const [query, setQuery] = useSearchParams(); 
   console.log(query.get('id')); 
   console.log([...query])
   query.set('id','haak');
   console.log(query.get('id')); 
   setQuery({ id : 'id', name : 'name'}); // URL 변경 


3. useNavigate ( 링크만들기 (Hook) )
   
   const navigate = useNavigate(); 
   navigate('/products/111');

4. Link ( 컴포넌트 / 디렉티브 )
  
   <Link to="url"/>

5. Navigate ( 컴포넌트 / 디렉티브 )

   <Navigate to="" />