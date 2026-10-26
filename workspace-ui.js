// Presentation and responsive navigation stay independent of project/rendering state.
export function initWorkspaceUI(){
  const main=document.getElementById('studio-main');
  const switchView=(view,{focus=false}={})=>{
    document.body.dataset.mobileView=view;
    document.querySelectorAll('[data-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.view===view)));
    if(matchMedia('(max-width: 800px)').matches){main.scrollTop=0;if(focus)main.focus({preventScroll:true});}
  };
  document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>switchView(button.dataset.view)));
  document.querySelector('[data-mobile-export]').addEventListener('click',()=>document.getElementById('export-open').click());
  document.querySelectorAll('[data-tab]').forEach(button=>button.addEventListener('click',()=>{
    switchView('settings');
    document.querySelectorAll('[data-tab]').forEach(tab=>tab.tabIndex=tab===button?0:-1);
    document.querySelectorAll('[data-step]').forEach(step=>{
      if(step.dataset.step===button.dataset.tab)step.setAttribute('aria-current','step');else step.removeAttribute('aria-current');
    });
  }));
  // Local files are useful on mobile as well; put project actions beside the story.
  const actions=document.createElement('div');actions.className='project-file-actions';
  for(const [target,label] of [['open','Open project'],['save','Download project']]){
    const button=document.createElement('button');button.className='secondary';button.textContent=label;
    button.addEventListener('click',()=>document.getElementById(target).click());actions.append(button);
  }
  document.querySelector('.story-footer').prepend(actions);
  document.querySelectorAll('[data-tab]').forEach(button=>button.tabIndex=button.classList.contains('active')?0:-1);
  for(const button of document.querySelectorAll('[data-tab]')){
    button.id='settings-'+button.dataset.tab;
    document.getElementById('tab-'+button.dataset.tab).setAttribute('aria-labelledby',button.id);
  }
  return switchView;
}
