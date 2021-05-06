
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaZoomIntegrationSetting } from './KalturaZoomIntegrationSetting';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaZoomIntegrationSettingResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaZoomIntegrationSettingResponse extends KalturaListResponse {

    readonly objects : KalturaZoomIntegrationSetting[];

    constructor(data? : KalturaZoomIntegrationSettingResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaZoomIntegrationSettingResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaZoomIntegrationSetting, subType : 'KalturaZoomIntegrationSetting' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaZoomIntegrationSettingResponse'] = KalturaZoomIntegrationSettingResponse;