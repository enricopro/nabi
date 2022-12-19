export default function SmallPost() {

  return (
    <div className="flex flex-col">
      <div className="w-fill h-56 overflow-hidden flex justify-center items-center rounded-2xl">
        <img className="object-fill" src="https://images.unsplash.com/photo-1510022151265-1bb84d406531?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format" alt="article-cover"/>
      </div>
      <h1 className="text-4xl text-secondary my-2">Article Title</h1>
      <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.</p>
      
    </div>
  )
}