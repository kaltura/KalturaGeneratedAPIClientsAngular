
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaAccessControlLimitThumbnailCaptureAction',KalturaAccessControlLimitThumbnailCaptureAction);
