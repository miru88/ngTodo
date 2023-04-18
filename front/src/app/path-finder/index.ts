

export function parseCellId(id: string): {x: number,y:number} {

    const idSub = id.substring(5,id.length);
    const ids: string[] =  idSub.split('-')

    return {"x":+ids[0], "y": +ids[1]}
}