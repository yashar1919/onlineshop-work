const shortTitle = (title) => {
    const splitTitle = title.split(" ");
    const newTitle = `${splitTitle[0]} ${splitTitle[1]} ${splitTitle[2]}`;
    return newTitle;
}
export { shortTitle };



const breakLine = (description) => {
    const res = [];
    for (let i = 0; i < description.length; i += 50) {
        const chunk = description.slice(i,  i + 50);
        res.push(chunk);
    }
    return res;
}
export { breakLine }

/* 
breakLine(description, 20).join('<br/>')
{breakLine(description, 20).map(x => ({x}<br/>))} */