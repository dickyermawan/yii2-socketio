/*
 * @Author: Dicky Ermawan S., S.T., MTA 
 * @Email: wanasaja@gmail.com 
 * @Web: dickyermawan.github.io 
 * @Linkedin: linkedin.com/in/dickyermawan 
 * @Date: 2019-07-28 14:55:47 
 * @Last Modified by: Dicky Ermawan S., S.T., MTA
 * @Last Modified time: 2019-07-28 17:39:32
 */

let vHost = window.location.hostname

const socket = io(vHost+':8089')
const url = window.location.host

let reloadTable = (id) => {
    if($('#'+ id).length)
        $.pjax.reload({
            container: '#'+ id
        })
}

socket.on('tambahAmprah', function (data) {
    reloadTable('tabel-amprah-admin')
    if(role.includes('Farmasi')) {
        let amprahUnproses = data['amprahUnproses']
        Swal.fire(
            'Haiii !',
            'Ada Amprahan Baru, Ayo Segera Proses ☺️',
            'info'
        )
        notif.play()
        $('#left-notif-amprah-admin').html('<span class="blink label label-info">'+ amprahUnproses +'</span>')
    }
})

socket.on('prosesAmprah', function (data) {
    reloadTable('tabel-amprah')
})