'use client';

import useSWR from 'swr';
import Select from 'react-select'

const fetchModels = () => fetch('/api/getEngines').then(res => res.json());

const ModelSelection = () => {
          const { data: models, isLoading, error } = useSWR('models', fetchModels);
          const { data: model, mutate: setModel } = useSWR('model', { fallbackData: 'text-davinci-003' })

          if (error) return <div>failed to load</div>
          if (isLoading) return <div>loading...</div>

          // render data
          return (
                    <>
                              <Select
                                        className='mt-2'
                                        options={models?.modelOptions}
                                        placeholder={model}
                                        defaultInputValue={model}
                                        isSearchable
                                        isLoading={isLoading}
                                        menuPosition='fixed'
                                        classNames={{ control: (state) => 'bg-[#434654] border-[#434654]' }}
                                        onChange={(e) => setModel(e)}
                              />
                    </>
          )
}
export default ModelSelection;