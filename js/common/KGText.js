/**
 * Created by Guang on 16/5/17.
 * @providesModule KGText
 */

import React from 'react-native'

export function Text({style,...props}:Object){
    return <React.Text style={style} {...props}/>
}