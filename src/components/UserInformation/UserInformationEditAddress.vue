<template>
    <div class="edit-container">
        <div class="edit-title">
            <p>➕ Thêm địa chỉ mới</p>
        </div>
         <b-input  placeholder="Họ và tên người đại diện" type="is-primary"></b-input>
         <b-input  placeholder="Số điện thoại" type="is-primary"></b-input>
         <b-field class="edit-city">
            <b-select placeholder="Tỉnh/Thành phố">
                <option value="1">HCM</option>
                <option value="2">HN</option>
            </b-select>
        </b-field>
         <b-field class="edit-district">
            <b-select placeholder="Quận/Huyện">
                <option value="1">HCM</option>
                <option value="2">HN</option>
            </b-select>
        </b-field>
         <b-field class="edit-wards">
            <b-select placeholder="Phường/Xã">
                <option value="1">HCM</option>
                <option value="2">HN</option>
            </b-select>
        </b-field>
         <b-input  placeholder="Số nhà, tên đường/phố, làng/ấp" type="is-primary"></b-input>
         <div class="butttons">
             <b-button type="is-primary">💾 Lưu địa chỉ mới</b-button>
         </div>
    </div>
</template>