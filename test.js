useEffect(() => {
    setSelected(null);
    setSelectedReview(null);
}, [dropDownAddress])
useEffect(() => {
    if (selectedReview) {
        let data = {
            prompt: prompt,
            review: selectedReview,
        };
        trackPromise(
            dispatch(generateGoogleReviewResponse(data)))
    }
}, [dispatch, responseToggle]);

/** test code **/
console.log('hello from test branch');
/** test code ends here **/

/** code from main branch **/
console.log('hello from main');
/** code ends here **/

useEffect(() => {
    if (googleReviewResponse) {
        setReviewResponse(googleReviewResponse)
    }
}, [googleReviewResponse])
useEffect(() => {
    setReviewResponse('');
}, [selectedReview])
const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
const onSearchChange = (value) => {
    setSearchText(value)
}
const handleRowClick = (value, index) => {
    if(selected === index) {
        setSelected(null);
        setSelectedReview(null);
        return;
    }
    else{
        setSelected(index);
        setSelectedReview(value.reviewText);}
    return
}
