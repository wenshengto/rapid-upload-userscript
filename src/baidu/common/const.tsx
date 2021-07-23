import { style_text, style_btn } from "../../common/const";

export const csd_html = '<p>弹出跨域访问窗口时,请选择"<span style="color: red;">总是允许</span>"或"<span style="color: red;">总是允许全部</span>"</p><img style="max-width: 100%; height: auto" src="https://pic.rmb.bdstatic.com/bjh/763ff5014cca49237cb3ede92b5b7ac5.png">';
const html_btn_rapid = `<a class="g-button g-button-blue" id="bdlink_btn" title="秒传链接" style="display: inline-block;"">
    <span class="g-button-right"><em class="icon icon-disk" title="秒传链接提取"></em><span class="text" style="width: auto;">秒传链接</span></span></a>`;
const html_btn_gen = `<a class="g-button" id="gen-bdlink-button"><span class="g-button-right"><em class="icon icon-share"></em><span class="text" style="width: auto;">生成秒传</span></span></a>`;
const html_check_md5 = `<p ${style_text}>测试秒传, 可防止秒传失效<a id="check_md5_btn" ${style_btn}><span class="text" style="width: auto;">测试</span></a></p>`;
const html_document = `<p ${style_text}>秒传无效/md5获取失败/防和谐 可参考<a ${style_btn} href="https://shimo.im/docs/TZ1JJuEjOM0wnFDH" rel="noopener noreferrer" target="_blank"><span class="text" style="width: auto;">分享教程</span></a></p>`;
