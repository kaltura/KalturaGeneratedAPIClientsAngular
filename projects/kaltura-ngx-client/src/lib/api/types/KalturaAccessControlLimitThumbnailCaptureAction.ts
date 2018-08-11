
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';

export interface KalturaAccessControlLimitThumbnailCaptureActionArgs  extends KalturaRuleActionArgs {
    
}


export class KalturaAccessControlLimitThumbnailCaptureAction extends KalturaRuleAction {

    

    constructor(data? : KalturaAccessControlLimitThumbnailCaptureActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAccessControlLimitThumbnailCaptureAction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAccessControlLimitThumbnailCaptureAction'] = KalturaAccessControlLimitThumbnailCaptureAction;