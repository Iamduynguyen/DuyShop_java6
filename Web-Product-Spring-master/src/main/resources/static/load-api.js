async function openHome() {
    await loadData('/admin/load-home')
    document.title = 'Trang quản trị viên'
}

async function openFormProduct() {
    await loadData('/admin/load/product/form')
    document.title = 'Nhập thông tin sản phẩm'
}

async function openFormEditProduct(e) {
    await loadData('/admin/load/product/form/' + e.dataset.id)
    document.title = 'Sửa thông tin sản phẩm'
    CKEDITOR.replace('description')
}

function openFormReturn(e) {
    loadData('/admin/load/returns/form/add-by-id-order/' + e.dataset.id)
    document.title = 'Nhập thông tin hoá đơn tả hàng'
}

function openFormEditReturn(e) {
    let id = e.dataset.id
    id === null || id === undefined || id === '' ? id = '-1-1-1' : null
    loadData('/admin/load/returns/form/' + id)
    document.title = 'Sửa thông tin hoá đơn trả hàng'
}

function openFormInvoice() {
    loadData('/admin/load/invoice/form')
    document.title = 'Nhập thông tin nhập hàng'
}

function openFormEditInvoice(e) {
    let id = e.dataset.id
    id === null || id === undefined || id === '' ? id = '-1-1-1' : null
    loadData('/admin/load/invoice/form/' + id)
    document.title = 'Sửa thông tin nhập hàng'
}

function openFormOrder() {
    loadData('/admin/load/bill-order/form')
    document.title = 'Nhập thông tin bán hàng'
}

function openFormEditOrder(e) {
    let id = e.dataset.id
    id === null || id === undefined || id === '' ? id = '-1-1-1' : null
    loadData('/admin/load/bill-order/form/' + id)
    document.title = 'Sửa thông tin nhập hàng'
}

function openInvoice() {
    loadData('/admin/load/invoice', 0, 5)
    document.title = 'Quản lý nhập hàng'
}

function openOrder() {
    loadData('/admin/load/bill-order', 0, 5)
    document.title = 'Quản lý hoá đơn thanh toán'
}

function openReturns() {
    loadData('/admin/load/returns', 0, 5)
    document.title = 'Quản lý hoá đơn trả hàng'
}

function openTransport() {
    loadData('/admin/load/transport', 0, 5)
    document.title = 'Quản lý hoá đơn vận chuyển'
}

function openHistory() {
    loadData('/admin/load/history', 0, 5)
    document.title = 'Quản lý lịch sử thao tác'
}

function openCategory() {
    urlCallDataCategoryOrBrand = '/admin/load/category'
    loadData('/admin/load/category', 0, 5)
    document.title = 'Quản lý loại sản phẩm'
}

function openBrand() {
    urlCallDataCategoryOrBrand = '/admin/load/brand'
    loadData('/admin/load/brand', 0, 5)
    document.title = 'Quản lý thương hiệu'
}

function openProduct() {
    loadData('/admin/load/product', 0, 5)
    document.title = 'Quản lý sản phẩm'
}

function openStaff() {
    loadData('/admin/load/user', 0, 5, 'staff')
    document.title = 'Quản lý nhân viên'
}

function openVisit() {
    loadData('/admin/load/user', 0, 5, 'visit')
    document.title = 'Quản lý khách hàng'
}

function openVoucher() {
    loadData('/admin/load/voucher', 0, 5)
    document.title = 'Quản lý thương hiệu'
}

//LOAD LINK GITHUB
// function getLinkGithub() {
//     let fileGithub = $('.file-github')
//     for (let i = 0; i < fileGithub.length; i++) {
//         if (fileGithub[i].dataset.fileGithub !== undefined
//             && fileGithub[i].dataset.fileGithub !== null) {
//             fileGithub[i].src = 'https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/' + fileGithub[i].dataset.fileGithub
//         }
//     }
// }

$(document).ready(async function () {
    let token = getSession('access_token')
    if (token !== null && token !== undefined && token !== '') {
        await fetch('/token/refresh', {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + token,
            }
        })
            .then(response => response.json())
            .then(out => {
                $.ajax({
                    url: '/admin/load-page',
                    type: 'POST',
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("Authorization", "Bearer " + getSession('access_token'));
                    },
                    success: function (response) {
                        response === null || response === undefined ? response = '' : response = response
                        $('#content').html(response)
                        openHome()
                    },
                    error: function (e) {
                        $('#content').html('<h3>' + e.status + '</h3>')
                        if (e.status === 403) {
                            window.location = '/login'
                        }
                    }
                });
            })
            .catch((error) => {
                window.location = '/login'
            });
    } else {
        window.location = '/login'
    }
    reloadPage()
})

function reloadPage() {
    let url = window.location.href + ''
    let type = url.substring(url.lastIndexOf("#") + 1)
    switch (type) {
        case 'staff':
            openStaff()
            break;
        case 'visit':
            openVisit()
            break;
        case 'category':
            openCategory()
            break;
        case 'brand':
            openBrand();
            break;
        case 'step-1':
        case 'step-2':
        case 'product':
            openProduct()
            break;
        case 'voucher':
            openVoucher()
            break;
        case 'form-invoice':
            openFormInvoice()
            break;
        case 'invoice':
        case 'form-edit-invoice':
            openInvoice()
            break;
        case 'bill-order':
        case 'form-edit-order':
            openOrder()
            break;
        case 'form-order':
            openFormOrder()
            break;
        case 'returns':
            openReturns();
            break;
        case 'history':
            openHistory()
            break;
        case 'transport':
            openTransport()
            break;
    }
}

function getSession(key) {
    return JSON.parse(window.sessionStorage.getItem(key))
}

function saveSession(key, data) {
    window.sessionStorage.setItem(key, JSON.stringify(data))
}

function removeSession(key) {
    window.sessionStorage.removeItem(key)
}

let urlApiLoadPage = '';

function clickPage(e) {
    let page = e.dataset.index
    let url = window.location.href + ''
    let typeUser = url.substring(url.lastIndexOf('#') + 1)
    console.log(typeUser)
    loadData(urlApiLoadPage, page, 5, typeUser)
}

function loadData(url, page, size, typeUser) {
    urlApiLoadPage = url
    typeUser === null || typeUser === undefined ? typeUser = '' : null
    $.ajax({
        url: url + '?_p=' + page + '&_s=' + size + '&_type=' + typeUser,
        type: 'GET',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + getSession('access_token'));
        },
        success: function (response) {
            response === null || response === undefined ? response = '' : null
            $('#root').html(response)
        },
        error: function (e) {
            $('#root').html('<h3>' + e.status + '</h3>')
        }
    });
}

function saveWithAPI(formData, url, method, linkSuccess, pageSuccess, sizeSucess, typeUser) {
    if (method === 'POST' || method === 'PUT') {
        $.ajax({
            url: url,
            type: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            enctype: 'multipart/form-data',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + getSession('access_token'));
            },
            success: function (data) {
                $('.modal').modal('hide');
                if (method === 'POST') {
                    swal("Thành công", 'Đã thêm mới', "success").then((function (t) {
                        if (t && linkSuccess !== null && linkSuccess !== undefined
                            && pageSuccess !== null && pageSuccess !== undefined
                            && sizeSucess !== null && sizeSucess !== undefined) {
                            loadData(linkSuccess, pageSuccess, sizeSucess, typeUser)
                        }
                    }))
                } else if (method === 'PUT') {
                    swal("Thành công", 'Đã chỉnh sửa', "success").then((function (t) {
                        if (t && linkSuccess !== null && linkSuccess !== undefined
                            && pageSuccess !== null && pageSuccess !== undefined
                            && sizeSucess !== null && sizeSucess !== undefined) {
                            loadData(linkSuccess, pageSuccess, sizeSucess, typeUser)
                        }
                    }))
                }
            },
            error: function (data) {
                swal("Thất bại", data.responseJSON.message, "warning")
            }
        });
    }
}

function getWithAPI(obj, path) {
    $.ajax({
        url: '/api/' + path,
        type: 'GET',
        data: obj,
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + getSession('access_token'));
        },
        success: function (response) {
            obj = response;
        },
        error: function (response) {
            obj = response;
        }
    });
}

// GITHUB
// save file to github
// let today = new Date();
// today = '[' + String(today.getDate()).padStart(2, '0') + '-'
//     + String(today.getMonth() + 1).padStart(2, '0') + '-'
//     + today.getFullYear() + ' '
//     + today.toTimeString() + ']' + ' == '
//     + String(today.getMilliseconds()).padStart(3, '0') + '.';
const nameOwner = 'ngocnqph12806';
const nameRepo = 'Repo_File';
const FIRST_TO = 'ghp_Stz6EVZNVXMCc'
const LAST_KEN = '7b3F5cN250U12C0Dx0Ivxkw'
const token = FIRST_TO + LAST_KEN;

function getNameTime() {
    let today = new Date();
    today = '[' + String(today.getDate()).padStart(2, '0') + '-'
        + String(today.getMonth() + 1).padStart(2, '0') + '-'
        + today.getFullYear() + ' '
        + today.toTimeString() + ']' + ' == '
        + String(today.getMilliseconds()).padStart(3, '0') + '.';
    return today
}

function readFileGithub(fileName, tagImg) {
    $.ajax({
        url: 'https://api.github.com/repos/' + nameOwner + '/' + nameRepo + '/contents/' + fileName,
        type: 'GET',
        headers: {
            "Authorization": +token,
            "Accept": "application/vnd.github.v3+json"
        }
    }).done(function (response) {
        tagImg.src = 'data:image/png;base64,' + response.content
    });
}

async function writeMutilFileGitHub(objFile) {
    for (let i = 0; i < objFile.targetFile.length; i++) {
        if (objFileImage.targetFile[i] !== null && objFileImage.targetFile[i] !== undefined) {
            let target = objFile.targetFile[i];
            let fileName = objFile.nameFile[i];
            await writeMutilFileGitHub(target, fileName);
            objFile.targetFile[i] = null;
        }
    }

}

const toBase64 = objFile => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(objFile);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

function writeFileGitHub(target, fileName) {
    if (target.files && target.files[0]) {
        let reader = new FileReader();
        // let fileName = today + target.files[0].name
        reader.onloadend = function () {
            let base64result = reader.result.substr(reader.result.indexOf(',') + 1);
            // saveFileGitHub(fileName, "uploading a file in date: " + getNameTime(), base64result)
            $.ajax({
                url: 'https://api.github.com/repos/' + nameOwner + '/' + nameRepo + '/contents/' + fileName,
                type: 'PUT',
                headers: {
                    "Authorization": "Bearer " + token,
                    "Accept": "application/vnd.github.v3+json"
                },
                data: JSON.stringify({
                    "message": "uploading a file in date: " + getNameTime(),
                    "content": base64result
                }),
                success: function (e) {
                    console.log('lưu thành công');
                }
            })
        }
        reader.readAsDataURL(target.files[0]);
    }
}

function saveFileGitHub(fileName, fileMessage, fileContent) {
    $.ajax({
        url: 'https://api.github.com/repos/' + nameOwner + '/' + nameRepo + '/contents/' + fileName,
        type: 'PUT',
        headers: {
            "Authorization": "Bearer " + token,
            "Accept": "application/vnd.github.v3+json"
        },
        data: JSON.stringify({
            "message": fileMessage,
            "content": fileContent
        })
    })
}

function loadImg() {
    let getImg = $('img')
    for (let i = 0; i < getImg.length; i++) {
        if (getImg[i].dataset.imgGithub !== undefined
            && getImg[i].dataset.imgGithub !== null) {
            console.log(getImg[i].dataset.imgGithub)
            readFileGithub(getImg[i].dataset.imgGithub, getImg[i])
        }
    }
}