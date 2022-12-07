const axios = require('axios')
const r = require('readline-sync')
const setTitle = require('console-title')

setTitle('TrackWrestling View Bot - By: @Hartman5')

const count = r.question('How many views: ')
const url = r.question('URL: ')

async function main() {
    await axios({
        method: 'GET',
        url: url,
        headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
        }
    }).then(res => {
        var re = new RegExp('Views:(.*)">')
        var views = res.data.match(re)
        console.log(`${views[1]} Views`)
    }).catch(err => {
        console.log(err)
    })
    for(let i = 0; i < parseInt(count); i++) {
        await axios({
            method: 'GET',
            url: url,
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
            }
        }).then(res => {
           console.log(`Viewed ${i + 1} times`)
           setTitle(`TrackWrestling View Bot - By: @Hartman5 - ${i + 1} Views Sent`)
        }).catch(err => {
            console.log(err)
        })
    }
    await axios({
        method: 'GET',
        url: url,
        headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
        }
    }).then(res => {
        var re = new RegExp('Views:(.*)">')
        var views = parseInt(res.data.match(re)[1]) - 1
        console.log(`${views} Views`)
    }).catch(err => {
        console.log(err)
    })
}
main()