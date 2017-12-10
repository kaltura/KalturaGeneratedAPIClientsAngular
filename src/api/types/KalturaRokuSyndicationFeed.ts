
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConstantXsltSyndicationFeed, KalturaConstantXsltSyndicationFeedArgs } from './KalturaConstantXsltSyndicationFeed';

export interface KalturaRokuSyndicationFeedArgs  extends KalturaConstantXsltSyndicationFeedArgs {
    
}


export class KalturaRokuSyndicationFeed extends KalturaConstantXsltSyndicationFeed {

    

    constructor(data? : KalturaRokuSyndicationFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRokuSyndicationFeed' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaRokuSyndicationFeed',KalturaRokuSyndicationFeed);
